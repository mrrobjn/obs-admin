import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
  BooleanField,
  BooleanInput,
  NumberField,
  ReferenceField,
  ArrayInput,
  NumberInput,
  SimpleFormIterator
} from "react-admin";
const Orders = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="userId" />
      <TextField source="date" />
      <TextField source="time" />
      <TextField source="address" />
      <NumberField source="totalPrice" />
      <BooleanField source="status" valueLabelTrue="Chưa xác nhận" valueLabelFalse="Đã xác nhận"/>
      <EditButton basepath="/orders" />
    </Datagrid>
  </List>
);
export const editOrders = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <BooleanInput source="status" />
      {/* <TextInput source="cardOwner"/>
      <TextInput source="cardNumber"/>
      <TextInput source="address"/> */}
      <ArrayInput source="arrayProducts">
        <SimpleFormIterator inline>
          <TextInput source="title" helperText={false} />
          <NumberInput source="price" helperText={false} />
          <NumberInput source="qty" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default Orders;
