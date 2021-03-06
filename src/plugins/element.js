import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Button,
  Table,
  TableColumn,
  Pagination,
  Breadcrumb,
  BreadcrumbItem,
  Dialog,
  Form,
  FormItem,
  Input,
  InputNumber,
  Switch,
  Cascader,
  DatePicker,
  TimeSelect,
  RadioGroup,
  Radio,
  RadioButton,
  CheckboxGroup,
  Checkbox,
  CheckboxButton,
  Select,
  Option,
  Transfer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Tabs,
  TabPane,
  Image,
  Upload,
  Message,
  MessageBox,
  Notification,
  Tree
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Switch)
Vue.use(Cascader)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(Select)
Vue.use(Option)
Vue.use(Transfer)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Avatar)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Image)
Vue.use(Upload)
Vue.use(Tree)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification

const {confirm, alert} = MessageBox
Vue.prototype.$confirm = confirm
Vue.prototype.$alert = alert
