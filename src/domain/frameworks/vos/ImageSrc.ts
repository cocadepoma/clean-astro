import { ValueObject } from "./ValueObject";

interface ImageSrcProps {
  value: string;
}

export class ImageSrc extends ValueObject<ImageSrcProps> {

  private constructor(props: ImageSrcProps) {
    super(props);
  }

  public static create(image: string): ImageSrc {
    if (image.length === 0) {
      throw new Error("image is required");
    } else if (!this.isValidUrl(image)) {
      throw new Error("image is not a valid URL");
    } else {
      return new ImageSrc({ value: this.format(image) });
    }
  }

  public get value(): string {
    return this.props.value
  };

  private static format(image: string): string {
    return image.trim();
  }

  private static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
}