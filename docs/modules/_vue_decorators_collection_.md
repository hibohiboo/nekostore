[nekostore](../README.md) › [Globals](../globals.md) › ["vue/decorators/Collection"](_vue_decorators_collection_.md)

# External module: "vue/decorators/Collection"

## Index

### Functions

* [Collection](_vue_decorators_collection_.md#collection)

## Functions

###  Collection

▸ **Collection**<**T**, **U**>(`refKey`: [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, [Query](../interfaces/_query_.query.md)‹T››): *VueDecorator*

Defined in vue/decorators/Collection.ts:28

Property decoretor to bind collection.

**`example`** 
```ts
import { Component, Vue } from 'vue-property-decolator';
import Query from 'nekostore/lib/Query';

interface Data {
  foo: string;
}

@Component
class MyComponent extends Vue {
  ref: Query<Data> | null = null;

  @Collection<Data, TestComponent>('ref') docs!: ExistingDocumentSnapshot<Data>[] | null;
}
```

**Type parameters:**

▪ **T**

▪ **U**: *[VueWithCreated](../interfaces/_vue_decorators_utilities_.vuewithcreated.md)*

**Parameters:**

Name | Type |
------ | ------ |
`refKey` | [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, [Query](../interfaces/_query_.query.md)‹T›› |

**Returns:** *VueDecorator*