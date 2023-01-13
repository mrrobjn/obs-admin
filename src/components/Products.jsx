import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
  NumberField,
  NumberInput,
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
} from "react-admin";
import React from "react";

const Products = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <NumberField source="price" />
      <TextField source="category_id" />
      <EditButton basepath="/products" />
    </Datagrid>
  </List>
);
export const editProducts = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="image" />
      <TextInput source="author" />
      <NumberInput source="price" />
      <ReferenceInput source="category_id" reference="categories">
        <SelectInput optionText="title"/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
export const createProducts = (props) => (
  <Create {...props}>
    <SimpleForm>
    <TextInput source="title" />
      <TextInput source="image" />
      <TextInput source="author" />
      <NumberInput source="price" />
      <ReferenceInput source="category_id" reference="categories" >
        <SelectInput optionText="title"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default Products;
