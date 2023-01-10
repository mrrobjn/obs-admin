import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
} from "react-admin";
import React from "react";

const Users = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="useName" />
      <TextField source="email" />
      <TextField source="phoneNo" />
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
      <TextInput source="password" />
    </SimpleForm>
  </Edit>
);

export default Users;
