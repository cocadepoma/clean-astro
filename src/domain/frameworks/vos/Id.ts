import { ValueObject } from "./ValueObject";

interface IdProps {
  value: string;
}

export class Id extends ValueObject<IdProps> {

  private constructor(props: IdProps) {
    super(props);
  }

  public static create(): Id {
    return new Id({ value: this.generateRandomId() });
  }

  public static createFrom(id: string): Id {
    return new Id({ value: id });
  }

  public get value(): string {
    return this.props.value
  };

  private static generateRandomId(): string {
    return Math.random().toString(36).substring(2);
  }
}