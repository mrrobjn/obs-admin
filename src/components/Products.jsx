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
      <NumberInput source="price" />
      <ReferenceInput source="type_id" reference="categories">
        <AutocompleteInput optionText="title"/>
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
      <ReferenceInput source="type" reference="categories" >
        <AutocompleteInput optionText="title"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default Products;
