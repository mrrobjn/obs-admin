import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  EmailField,
  NumberField,
  PasswordInput,
} from "react-admin";
import React from "react";

const Users = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="useName" />
      <EmailField source="email" />
      <NumberField source="phoneNo" />
      <EditButton basepath="/users" />
    </Datagrid>
  </List>
);
export const editUsers = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="useName" />
      <TextInput source="email" />
      <TextInput source="phoneNo" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Edit>
);

export default Users;
