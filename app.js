import express from 'express';
import bodyparser from 'body-parser';

const app = express();


app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


const validUsername = 'user';
const validPassword = 'pass';

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { role, username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    if (role === 'display') 
    {
      res.render('Home');
    } 

    else if (role === 'change') 
    {
      res.render('changeHome');
    }

     else if (role === 'edit') 
    {
      res.render('editHome');
    }
     
    else 
    {
      res.send('Invalid role');
    }
  } else {
    res.send('Invalid username or password');
  }
});

const routes = [
  
'AccessFields',
'AccessSequence_NewEntry',
'accessSequence',
'AccessSequenceFields',
'AccessTable_NewEntry',
'AccessTable',
'Account_assignmentGrp',
'Account_assignmentGrpNewEntry',
'account_Cc_AccMng',
'account_Cc_Corr',
'account_Cc_Insurence',
'account_Cc_Pay',
'account_Cc_WH',
'account_Gen_Add',
'account_Gen_Comm',
'account_Gen_Cont',
'account_Gen_Contact',
'account_Gen_Foreign',
'account_Gen_Marketing',
'account_Gen_Pay',
'account_Gen_Unloading',
'account_Sales_Billing',
'account_Sales_Documents',
'account_Sales_Partner',
'account_Sales_Sales',
'account_Sales_Shipping',
'accountgrp_CC',
'accountgrp_GeneralData',
'accountgrp_SalesData',
'accountgrp',
'ActivityAssignDocument',
'ActivityDefineCustomer',
'ActivityDefineDocument',
'ActivityDetermination',
'ActivityDocumentPricing',
'ActivityMaintainPricing',
'assign-sales-dist-plant',
'AssignBusinessArea',
'assignbusinessareaBySales',
'assigncompanycode',
'assignDistributionChannel',
'assignDivision',
'assignPlant',
'assignPurchasingOrg',
'assignSalesGroup',
'assignSalesOffice',
'assignSalesOrganisation',
'assignSalesToCredit',
'AssignShippingPoint',
'assignToCreditControl',
'business',
'changeHome',
'companycode',
'companyform',
'Condition',
'ConditionTable',
'ConditionTypes',
'ControldataTable_NewEntry',
'ControldataTable',
'Countrytable',
'creditcontrolarea',
'Currencytable',
'Customer_accountgrp',
'Customer_accountgrpNewEntry',
'Customer_Group',
'Customer_GroupNewEntry',
'DefAssPricingprocedure',
'DefineCustomerNewEntry',
'DefineDocumentNewEntry',
'Delivery_Priorities',
'Delivery_PrioritiesNewEntry',
'DeterminationNewEntry',
'distribuation',
'distributionChannel',
'division',
'editHome',
'err',
'Free_Goods_accessSequenc',
'Free_Goods_Condition',
'Free_Goods_ConditionTable',
'Free_Goods_ConditionTypes',
'Free_Goods_Determination',
'Free_Goods_DeterminationNewEntry',
'Free_Goods_NumRange',
'Free_Goods_Pricingprocedure',
'FreeGoods_AccessFields',
'FreeGoods_AccessSequence_NewEntry',
'FreeGoods_AccessTable_NewEntry',
'FreeGoods_AccessTable',
'FreeGoods_ControldataTable_NewEntry',
'FreeGoods_ControldataTable',
'FreeGoods_PricingNewEntry',
'functionalarea',
'Home',
'html',
'Inco_Terms',
'Inco_TermsNewEntry',
'Languagetable',
'Listing_Exclusion_Allowed_NewEntry',
'Listing_Exclusion_Allowed',
'Listing_Exclusion_Condition',
'Listing_Exclusion_ConditionTable',
'Listing_Exclusion_Maintain_NewEntry',
'Listing_Exclusion_Maintain',
'Listing_Exclusion_Procedures_ControlData_NewEntry',
'Listing_Exclusion_Procedures_ControlData',
'Listing_Exclusion_Procedures_NewEntry',
'Listing_Exclusion_Procedures',
'Listing_Exclusion_Sales_NewEntry',
'Listing_Exclusion_Sales',
'Listing_Exclusion_Sequence_Access_NewEntry',
'Listing_Exclusion_Sequence_Access',
'Listing_Exclusion_Sequence_AccessFields',
'Listing_Exclusion_Sequence_NewEntry',
'Listing_Exclusion_Sequence',
'loadintpy',
'login',
'loginform',
'Logistics_BatchMngmnt',
'Logistics_BM_Access_Inventory_AccessFields',
'Logistics_BM_Access_Inventory_AccessSequence_NewEntry',
'Logistics_BM_Access_Inventory_AccessSequence',
'Logistics_BM_Access_Inventory_AccessTable_NewEntry',
'Logistics_BM_Access_Inventory_AccessTable',
'Logistics_BM_Access_Process_AccessFields',
'Logistics_BM_Access_Process_AccessSequence_NewEntry',
'Logistics_BM_Access_Process_AccessSequence',
'Logistics_BM_Access_Process_AccessTable_NewEntry',
'Logistics_BM_Access_Process_AccessTable',
'Logistics_BM_Access_Production_AccessFields',
'Logistics_BM_Access_Production_AccessSequence_NewEntry',
'Logistics_BM_Access_Production_AccessSequence',
'Logistics_BM_Access_Production_AccessTable_NewEntry',
'Logistics_BM_Access_Production_AccessTable',
'Logistics_BM_Access_Sales_AccessFields',
'Logistics_BM_Access_Sales_AccessSequence_NewEntry',
'Logistics_BM_Access_Sales_AccessSequence',
'Logistics_BM_Access_Sales_AccessTable_NewEntry',
'Logistics_BM_Access_Sales_AccessTable',
'Logistics_BM_Access_Warehouse_AccessFields',
'Logistics_BM_Access_Warehouse_AccessSequence_NewEntry',
'Logistics_BM_Access_Warehouse_AccessSequence',
'Logistics_BM_Access_Warehouse_AccessTable_NewEntry',
'Logistics_BM_Access_Warehouse_AccessTable',
'Logistics_BM_AccessSequence',
'Logistics_BM_ActivateDoc',
'Logistics_BM_ActivateInternal',
'Logistics_BM_Activation_Check_KANBAN_NewEntry',
'Logistics_BM_Activation_Check_KANBAN',
'Logistics_BM_Activation_Check_Network_NewEntry',
'Logistics_BM_Activation_Check_Network',
'Logistics_BM_Activation_Check_Process',
'Logistics_BM_Activation_Check_Production_NewEntry',
'Logistics_BM_Activation_Check_Production',
'Logistics_BM_Activation_Check_PullList',
'Logistics_BM_Activation_Check_Repititive',
'Logistics_BM_Activation_Check',
'Logistics_BM_Activation_SD_NewEntry',
'Logistics_BM_Activation_SD',
'Logistics_BM_Activation_WM_Movemnt',
'Logistics_BM_Activation_WM_WMNo',
'Logistics_BM_Activation_WM',
'Logistics_BM_Activation',
'Logistics_BM_AllocationNumRange',
'Logistics_BM_AssignRange',
'Logistics_BM_AutomaticDet_Delivery',
'Logistics_BM_AutomaticDet_Sales',
'Logistics_BM_AutomaticDet',
'Logistics_BM_BatchLvl',
'Logistics_BM_Condn_Inventory_Allowed_New',
'Logistics_BM_Condn_Inventory_Allowed',
'Logistics_BM_Condn_Inventory_Change',
'Logistics_BM_Condn_Inventory_ChangeTable',
'Logistics_BM_Condn_Inventory_Create',
'Logistics_BM_Condn_Inventory_CreateTable',
'Logistics_BM_Condn_Inventory_Display',
'Logistics_BM_Condn_Inventory_DisplayTable',
'Logistics_BM_Condn_Inventory',
'Logistics_BM_Condn_Process_Allowed_New',
'Logistics_BM_Condn_Process_Allowed',
'Logistics_BM_Condn_Process_Change',
'Logistics_BM_Condn_Process_ChangeTable',
'Logistics_BM_Condn_Process_Create',
'Logistics_BM_Condn_Process_CreateTable',
'Logistics_BM_Condn_Process_Display',
'Logistics_BM_Condn_Process_DisplayTable',
'Logistics_BM_Condn_Process',
'Logistics_BM_Condn_Production_Allowed_New',
'Logistics_BM_Condn_Production_Allowed',
'Logistics_BM_Condn_Production_Change',
'Logistics_BM_Condn_Production_ChangeTable',
'Logistics_BM_Condn_Production_Create',
'Logistics_BM_Condn_Production_CreateTable',
'Logistics_BM_Condn_Production_Display',
'Logistics_BM_Condn_Production_DisplayTable',
'Logistics_BM_Condn_Production',
'Logistics_BM_Condn_Sales_Allowed_New',
'Logistics_BM_Condn_Sales_Allowed',
'Logistics_BM_Condn_Sales_Change',
'Logistics_BM_Condn_Sales_ChangeTable',
'Logistics_BM_Condn_Sales_Create',
'Logistics_BM_Condn_Sales_CreateTable',
'Logistics_BM_Condn_Sales_Display',
'Logistics_BM_Condn_Sales_DisplayTable',
'Logistics_BM_Condn_Sales',
'Logistics_BM_Condn_Warehouse_Allowed_New',
'Logistics_BM_Condn_Warehouse_Allowed',
'Logistics_BM_Condn_Warehouse_Change',
'Logistics_BM_Condn_Warehouse_ChangeTable',
'Logistics_BM_Condn_Warehouse_Create',
'Logistics_BM_Condn_Warehouse_CreateTable',
'Logistics_BM_Condn_Warehouse_Display',
'Logistics_BM_Condn_Warehouse_DisplayTable',
'Logistics_BM_Condn_Warehouse',
'Logistics_BM_CondnTable',
'Logistics_BM_FieldSelection_NewEntry',
'Logistics_BM_FieldSelection',
'Logistics_BM_GoodsMov',
'Logistics_BM_InternalBatch',
'Logistics_BM_InventoryMng',
'Logistics_BM_NumberAssgn',
'Logistics_BM_PlantMngt',
'Logistics_BM_ProcedureDef_Inventory_Control_NewEntry',
'Logistics_BM_ProcedureDef_Inventory_Control',
'Logistics_BM_ProcedureDef_Inventory_NewEntry',
'Logistics_BM_ProcedureDef_Inventory',
'Logistics_BM_ProcedureDef_Process_Control_NewEntry',
'Logistics_BM_ProcedureDef_Process_Control',
'Logistics_BM_ProcedureDef_Process_NewEntry',
'Logistics_BM_ProcedureDef_Process',
'Logistics_BM_ProcedureDef_Production_Control_NewEntry',
'Logistics_BM_ProcedureDef_Production_Control',
'Logistics_BM_ProcedureDef_Production_NewEntry',
'Logistics_BM_ProcedureDef_Production',
'Logistics_BM_ProcedureDef_Sales_Control_NewEntry',
'Logistics_BM_ProcedureDef_Sales_Control',
'Logistics_BM_ProcedureDef_Sales_NewEntry',
'Logistics_BM_ProcedureDef_Sales',
'Logistics_BM_ProcedureDef_Warehouse_Control_NewEntry',
'Logistics_BM_ProcedureDef_Warehouse_Control',
'Logistics_BM_ProcedureDef_Warehouse_NewEntry',
'Logistics_BM_ProcedureDef_Warehouse',
'Logistics_BM_ProcedureDef',
'Logistics_BM_ProcessOrder',
'Logistics_BM_Sort_Change',
'Logistics_BM_Sort_Create',
'Logistics_BM_Sort_Display',
  'login',

];


routes.forEach(route => {
  app.get(`/${route}`, (req, res) => {
    res.render(route);
  });
});


const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Access Sequence


// app.get("/SD_Text_TextType_Agency_Change1_Access", (req, res) => {
// })

// app.get("/SD_Text_TextType_Agency_Change1_Access_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Agency_Change2_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_Agency_Change2_Access_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_billingDoc_Change1_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_Change1_Access_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_Change2_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_Change2_Access_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Delivery_Change1_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_Delivery_Change1_Access_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Delivery_Change2_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_Delivery_Change2_Access_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_SalesAct_Change1_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesAct_Change1_Access_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_Change1_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_Change1_Access_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_SalesDoc_Change2_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_Change2_Access_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_Change1_Access", (req, res) => {
// })

// app.get("/SD_Text_TextType_Trading_Change1_Access_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_Change2_Access", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_Change2_Access_New", (req, res) => {
// })


// // Access Text ID 



// app.get("/SD_Text_TextType_Agency_Change1_AccessID", (req, res) => {
// })

// app.get("/SD_Text_TextType_Agency_Change1_AccessID_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Agency_Change2_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_Agency_Change2_AccessID_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_billingDoc_Change1_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_Change1_AccessID_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_Change2_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_Change2_AccessID_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Delivery_Change1_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_Delivery_Change1_AccessID_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Delivery_Change2_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_Delivery_Change2_AccessID_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_SalesAct_Change1_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesAct_Change1_AccessID_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_Change1_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_Change1_AccessID_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_SalesDoc_Change2_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_Change2_AccessID_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_Change1_AccessID", (req, res) => {
// })

// app.get("/SD_Text_TextType_Trading_Change1_AccessID_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_Change2_AccessID", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_Change2_AccessID_New", (req, res) => {
// })



// // Text Type



// app.get("/SD_Text_TextType_Agency_TextType1", (req, res) => {
// })

// app.get("/SD_Text_TextType_Agency_TextType1_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Agency_TextType2", (req, res) => {
// })
// app.get("/SD_Text_TextType_Agency_TextType2_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_billingDoc_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_TextType1_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_TextType2", (req, res) => {
// })
// app.get("/SD_Text_TextType_billingDoc_TextType2_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Cust_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Cust_TextType1_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Cust_TextType2", (req, res) => {
// })
// app.get("/SD_Text_TextType_Cust_TextType2_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Cust_TextType3", (req, res) => {
// })
// app.get("/SD_Text_TextType_Cust_TextType3_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Delivery_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Delivery_TextType1_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Delivery_TextType2", (req, res) => {
// })
// app.get("/SD_Text_TextType_Delivery_TextType2_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Financial_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Financial_TextType1_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Info_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Info_TextType1_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Legal_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Legal_TextType1_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Pricing_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Pricing_TextType1_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Pricing_TextType2", (req, res) => {
// })
// app.get("/SD_Text_TextType_Pricing_TextType2_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_SalesAct_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesAct_TextType1_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_TextType1_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_SalesDoc_TextType2", (req, res) => {
// })
// app.get("/SD_Text_TextType_SalesDoc_TextType2_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Shipment_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Shipment_TextType1_New", (req, res) => {
// })

// app.get("/SD_Text_TextType_Trading_TextType1", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_TextType1_New", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_TextType2", (req, res) => {
// })
// app.get("/SD_Text_TextType_Trading_TextType2_New", (req, res) => {
// })


// // text determination sd
// // text type
// app.get("/SD_Text_TextType", (req, res) => {
// })

// // access
// app.get("/SD_Text_Access", (req, res) => {
// })



// // routes
// app.get("/SD_DefineRoutes", (req, res) => {
// })
// app.get("/SD_DefineRoute_Transport", (req, res) => {
// })
// app.get("/SD_DefineRoute_Transport_New", (req, res) => {
// })
// app.get("/SD_DefineRoute_Shipping", (req, res) => {
// })
// app.get("/SD_DefineRoute_Shipping_New", (req, res) => {
// })
// app.get("/SD_DefineRoute_Connection", (req, res) => {
// })
// app.get("/SD_DefineRoute_Connection_New", (req, res) => {
// })
// app.get("/SD_DefineRoute_Stage", (req, res) => {
// })
// app.get("/SD_DefineRoute_Stage_New", (req, res) => {
// })

// app.get("/SD_RouteDet", (req, res) => {
// })
// app.get("/SD_RouteDet_Transport", (req, res) => {
// })
// app.get("/SD_RouteDet_Transport_New", (req, res) => {
// })
// app.get("/SD_RouteDet_Shipping", (req, res) => {
// })
// app.get("/SD_RouteDet_Transportation", (req, res) => {
// })
// app.get("/SD_RouteDet_Transportation_New", (req, res) => {
// })

// app.get("/SD_RouteDet_WeightGrp", (req, res) => {
// })
// app.get("/SD_RouteDet_Weightgrp_New", (req, res) => {
// })
// app.get("/SD_RouteDet_Weightgrp_Detail", (req, res) => {
// })
// app.get("/SD_RouteDet_Weightgrp_Detail_New", (req, res) => {
// })

// app.get("/SD_RouteDet_Determination", (req, res) => {
// })
// app.get("/SD_RouteDet_Determination_New", (req, res) => {
// })
// app.get("/SD_RouteDet_Determination_Order", (req, res) => {
// })
// app.get("/SD_RouteDet_Determination_Order_New", (req, res) => {
// })

// app.get("/SD_RouteDet_Determination_Delivery", (req, res) => {
// })
// app.get("/SD_RouteDet_Determination_Delivery_New", (req, res) => {
// })







app.get("/html", (req, res) => {
  let query = "select * from Country";

  connect.query(query, (err, data) => {
    console.log(data);
    res.render("html", { data: data });
  });
});

app.post("/addCountry", (req, res) => {
  let Country = req.body.cname;
  let Code = req.body.ccode;
  console.log(Code);
  var que = `insert into Country Values("${Code}",'${Country}')`;
  connect.query(que, (err) => {
    if (err) console.log(err);
    else console.log("added");
  });
  res.render("succ");
});







// login


