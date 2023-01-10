import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
} from "react-admin";
import React from "react";

const Products = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="price" />
      <TextField source="type" />
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
      <TextInput source="price" />
      <TextInput source="type" />
    </SimpleForm>
  </Edit>
);
export const createProducts = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="image" />
      <TextInput source="author" />
      <TextInput source="price" />
      <TextInput source="type" />
    </SimpleForm>
  </Create>
);

export default Products;
