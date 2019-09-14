import { expect } from 'chai';
import { Nekostore } from '../nekostore';
import fakeDriver from '../../tests/fakeDriver';
import DocumentReference from './DocumentReference';

interface Data1 {
  foo: string;
}

describe('DocumentReference', () => {
  const driver = fakeDriver();
  const nekostore = new Nekostore(driver);

  let doc: DocumentReference<Data1>;
  it('is DocumentReferene', () => {
    doc = nekostore.collection<Data1>('c01').doc('d01');
    expect(doc.id).to.equal('d01');
    expect(doc.path).to.equal('c01/d01');
    expect(doc).to.equal(driver.fakeDocument);
  });

  it('returns sub CollectionReference', () => {
    const collection = doc.collection('c02');
    expect(doc.collection).to.be.calledOnceWith('c02');
    expect(collection.id).to.equal('c02');
    expect(collection.path).to.equal('c01/d01/c02');
    expect(collection).to.equal(driver.fakeSubCollection);
  });
});
