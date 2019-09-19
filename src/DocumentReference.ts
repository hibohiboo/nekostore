import CollectionReference from './CollectionReference';
import DocumentSnapshot from './DocumentSnapshot';
import Unsubscribe from './Unsubscribe';

export default interface DocumentReference<T> {
  readonly id: string;
  readonly path: string;
  readonly parent: CollectionReference<T>;

  collection<U>(id: string): CollectionReference<U>;

  get(): Promise<DocumentSnapshot<T>>;

  set(data: T): Promise<void>;
  update(data: Partial<T>): Promise<void>;
  delete(): Promise<void>;

  onSnapshot(
    onNext: (snapshot: DocumentSnapshot<T>) => void,
  ): Promise<Unsubscribe>;
}