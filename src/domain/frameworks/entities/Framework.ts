import {
  Id,
  ImageSrc,
  Name,
  Popularity,
} from "../vos";

export interface FrameworkDataProps {
  id: Id;
  name: Name;
  description: Name;
  image: ImageSrc;
  popularity: Popularity;
}

export interface FrameworkProps {
  id: string;
  name: string;
  description: string;
  image: string;
  popularity: number;
}

export class Framework {
  public readonly id: Id;
  public readonly name: Name;
  public readonly description: Name;
  public readonly image: ImageSrc;
  public readonly popularity: Popularity;

  private constructor(props: FrameworkDataProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description
    this.image = props.image;
    this.popularity = props.popularity;
  }

  static create(props: FrameworkProps): Framework {
    try {
      const id = props.id ? Id.createFrom(props.id) : Id.create();
      const name = Name.create(props.name);
      const description = Name.create(props.description);
      const image = ImageSrc.create(props.image);
      const popularity = Popularity.create(props.popularity);

      return new Framework({ id, name, description, image, popularity });
    } catch (error) {
      throw Error(`Error creating Framework entity: ${error}`);
    }
  }

  public update(props: FrameworkProps): Framework {
    try {
      const id = props.id ? Id.createFrom(props.id) : this.id;
      const name = props.name ? Name.create(props.name) : this.name;
      const description = props.description ? Name.create(props.description) : this.description;
      const image = props.image ? ImageSrc.create(props.image) : this.image;
      const popularity = props.popularity ? Popularity.create(props.popularity) : this.popularity;

      return new Framework({ id, name, description, image, popularity });
    } catch (error) {
      throw Error(`Error updating Framework entity: ${error}`);
    }
  }

  public toJSON(): FrameworkProps {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value,
      image: this.image.value,
      popularity: this.popularity.value,
    };
  }
}