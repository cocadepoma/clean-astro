import { ValueObject } from "./ValueObject";

interface ImageSrcProps {
  value: string;
}

export class ImageSrc extends ValueObject<ImageSrcProps> {

  private constructor(props: ImageSrcProps) {
    super(props);
  }

  public static create(image?: string): ImageSrc {
    if (!image || image?.length === 0 || !this.isValidUrl(image)) {
      return new ImageSrc({ value: 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg' });
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