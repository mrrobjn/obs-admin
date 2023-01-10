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

const Categories = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <EditButton basepath="/categories" />
    </Datagrid>
  </List>
);
export const editCategories = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);
export const createCategories = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);

export default Categories;
