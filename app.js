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
'Logistics_BM_Sort',
'Logistics_BM_StatusMngt',
'Logistics_BM_Strategy_Inventory',
'Logistics_BM_Strategy_Process',
'Logistics_BM_Strategy_Production',
'Logistics_BM_Strategy_Sales',
'Logistics_BM_Strategy_Warehouse',
'Logistics_BM_StrategyTypes',
'Logistics_BM_Transaction',
'Logistics_BM_WarehouceMng',
'Logistics_BusinessPartner',
'Logistics_MaterialMaster',
'Logistics_MM_Config_AssignScreens',
'Logistics_MM_Config_MaintainScreens',
'Logistics_MM_Config_Sequence',
'Logistics_MM_Config_Transaction',
'MaintainPricingNewEntry',
'numrange',
'Output_Det_Billing_Access_NewEntry',
'Output_Det_Billing_Access',
'Output_Det_Billing_AccessFields',
'Output_Det_Billing_AccessTable_NewEntry',
'Output_Det_Billing_AccessTable',
'Output_Det_Billing_AssignProcedure',
'Output_Det_Billing_Condition_Table',
'Output_Det_Billing_Condition',
'Output_Det_Billing_MaintainProcedure_ControldataTable_NewEntry',
'Output_Det_Billing_MaintainProcedure_ControldataTable',
'Output_Det_Billing_MaintainProcedure_NewEntry',
'Output_Det_Billing_MaintainProcedure',
'Output_Det_Billing_Output_Mail_NewEntry',
'Output_Det_Billing_output_Mail',
'Output_Det_Billing_Output_NewEntry',
'Output_Det_Billing_output_Partner_NewEntry',
'Output_Det_Billing_output_Partner',
'Output_Det_Billing_output_Processing_NewEntry',
'Output_Det_Billing_output_Processing',
'Output_Det_Billing_Output',
'Output_Det_SA_Access_NewEntry',
'Output_Det_SA_Access',
'Output_Det_SA_AccessFields',
'Output_Det_SA_AccessTable_NewEntry',
'Output_Det_SA_AccessTable',
'Output_Det_SA_AssignProcedure',
'Output_Det_SA_Condition_Table',
'Output_Det_SA_Condition',
'Output_Det_SA_MaintainProcedure_ControldataTable_NewEntry',
'Output_Det_SA_MaintainProcedure_ControldataTable',
'Output_Det_SA_MaintainProcedure_NewEntry',
'Output_Det_SA_MaintainProcedure',
'Output_Det_SA_Output_Mail_NewEntry',
'Output_Det_SA_output_Mail',
'Output_Det_SA_Output_NewEntry',
'Output_Det_SA_output_Partner_NewEntry',
'Output_Det_SA_output_Partner',
'Output_Det_SA_output_Processing_NewEntry',
'Output_Det_SA_output_Processing',
'Output_Det_SA_Output',
'Output_Det_SDoc_Access_NewEntry',
'Output_Det_SDoc_Access',
'Output_Det_SDoc_AccessFields',
'Output_Det_SDoc_AccessTable_NewEntry',
'Output_Det_SDoc_AccessTable',
'Output_Det_SDoc_AssignProcedure_Header',
'Output_Det_SDoc_AssignProcedure_Item',
'Output_Det_SDoc_AssignProcedure',
'Output_Det_SDoc_Condition_Table',
'Output_Det_SDoc_Condition',
'Output_Det_SDoc_MaintainProcedure_ControldataTable_NewEntry',
'Output_Det_SDoc_MaintainProcedure_ControldataTable',
'Output_Det_SDoc_MaintainProcedure_NewEntry',
'Output_Det_SDoc_MaintainProcedure',
'Output_Det_SDoc_Output_Mail_NewEntry',
'Output_Det_SDoc_output_Mail',
'Output_Det_SDoc_Output_NewEntry',
'Output_Det_SDoc_output_Partner_NewEntry',
'Output_Det_SDoc_output_Partner',
'Output_Det_SDoc_output_Processing_NewEntry',
'Output_Det_SDoc_output_Processing',
'Output_Det_SDoc_Output',
'Output_Determination_Billing',
'Output_Determination_SalesActivity',
'Output_Determination_SalesDoc',
'Output_Determination',
'PartDetmProcedureAssgn',
'PartFuncProcedure',
'PartGrpFuncAssn',
'PartnerDetermination',
'Physical_MIGO_Field',
'Physical_MIGO_Movement',
'Physical_MIGO',
'Physical_Movements_Assignment',
'Physical_Movements_Goods_Mvt',
'Physical_Movements_Goods_Plant',
'Physical_Movements_Goods',
'Physical_Movements_ScLayout_Overview_Acc',
'Physical_Movements_ScLayout_Overview_Add',
'Physical_Movements_ScLayout_Overview_Cons',
'Physical_Movements_ScLayout_Overview_Fin',
'Physical_Movements_ScLayout_Overview_Foreign',
'Physical_Movements_ScLayout_Overview_Gen',
'Physical_Movements_ScLayout_Overview_MM',
'Physical_Movements_ScLayout_Overview_Pay',
'Physical_Movements_ScLayout_Overview_Real',
'Physical_Movements_ScLayout_Overview_Tax',
'Physical_Movements_ScLayout_Overview_Transfer',
'Physical_Movements_ScLayout_Overview_War',
'Physical_Movements_ScLayout_Overview',
'Physical_Movements_ScLayout',
'Physical_Movements_Storage_Mvt',
'Physical_Movements_Storage_Plant',
'Physical_Movements_Storage',
'Physical_Movements',
'Physical_Number_Assgn_Accounting_Automatic',
'Physical_Number_Assgn_Accounting_Doc_NewEntry',
'Physical_Number_Assgn_Accounting_Doc',
'Physical_Number_Assgn_Accounting_Issue',
'Physical_Number_Assgn_Accounting_Num',
'Physical_Number_Assgn_Accounting_Physical',
'Physical_Number_Assgn_Accounting_Receipt',
'Physical_Number_Assgn_Accounting',
'Physical_Number_Assgn_Goods_Interval',
'Physical_Number_Assgn_Goods_Num_NewEntry',
'Physical_Number_Assgn_Goods_Num',
'Physical_Number_Assgn_Goods_Object_NewEntry',
'Physical_Number_Assgn_Goods_Object',
'Physical_Number_Assgn_Goods_Plant',
'Physical_Number_Assgn_Goods',
'Physical_Number_Assgn_Material',
'Physical_Number_Assgn_MoveInitials',
'Physical_Number_Assgn_Reservation_Interval',
'Physical_Number_Assgn_Reservation_Num',
'Physical_Number_Assgn_Reservation',
'Physical_Number_Assgn',
'Physical_Plant_Param',
'Physical_Plant_ParamNewEntry',
'Physical_Postings_Assignment',
'Physical_Postings_Goods_Mvt',
'Physical_Postings_Goods_Plant',
'Physical_Postings_Goods',
'Physical_Postings_Negative_Stock_Plant_Loc',
'Physical_Postings_Negative_Stock_Plant',
'Physical_Postings_Negative',
'Physical_Postings_ScLayout_Overview_Acc',
'Physical_Postings_ScLayout_Overview_Add',
'Physical_Postings_ScLayout_Overview_Cons',
'Physical_Postings_ScLayout_Overview_Fin',
'Physical_Postings_ScLayout_Overview_Foreign',
'Physical_Postings_ScLayout_Overview_Gen',
'Physical_Postings_ScLayout_Overview_MM',
'Physical_Postings_ScLayout_Overview_Pay',
'Physical_Postings_ScLayout_Overview_Real',
'Physical_Postings_ScLayout_Overview_Tax',
'Physical_Postings_ScLayout_Overview_Transfer',
'Physical_Postings_ScLayout_Overview_War',
'Physical_Postings_ScLayout_Overview',
'Physical_Postings_ScLayout',
'Physical_Postings_Storage_Mvt',
'Physical_Postings_Storage_Plant',
'Physical_Postings_Storage',
'Physical_Postings',
'Physical_Receipt_Assignment',
'Physical_Receipt_Loc',
'Physical_Receipt_Purchase',
'Physical_Receipt_ScLayout',
'Physical_Receipt_Storage_Mvt',
'Physical_Receipt_Storage_Plant',
'Physical_Receipt',
'plant',
'Price_Group',
'Price_GroupNewEntry',
'Price_List',
'Price_ListNewEntry',
'Processing',
'profitcenter',
'Purch_ReleaseProcedure_ReleaseCode',
'Purch_ReleaseProcedure_ReleaseGroup',
'Purch_ReleaseProcedure_ReleaseIndicator',
'Purch_ReleaseProcedure_ReleaseStratigies',
'PurchaseInfo_NumberRange',
'PurchaseInfo_ScLayout_ME11_Adm',
'PurchaseInfo_ScLayout_ME11_Basic',
'PurchaseInfo_ScLayout_ME11_Cond',
'PurchaseInfo_ScLayout_ME11_Del',
'PurchaseInfo_ScLayout_ME11_GR',
'PurchaseInfo_ScLayout_ME11_Qnt',
'PurchaseInfo_ScLayout_ME11_Ref',
'PurchaseInfo_ScLayout_ME11_Texts',
'PurchaseInfo_ScLayout_ME11',
'PurchaseInfo_ScLayout_ME12_Adm',
'PurchaseInfo_ScLayout_ME12_Basic',
'PurchaseInfo_ScLayout_ME12_Cond',
'PurchaseInfo_ScLayout_ME12_Del',
'PurchaseInfo_ScLayout_ME12_GR',
'PurchaseInfo_ScLayout_ME12_Qnt',
'PurchaseInfo_ScLayout_ME12_Ref',
'PurchaseInfo_ScLayout_ME12_Texts',
'PurchaseInfo_ScLayout_ME12',
'PurchaseInfo_ScLayout_ME13_Adm',
'PurchaseInfo_ScLayout_ME13_Basic',
'PurchaseInfo_ScLayout_ME13_Cond',
'PurchaseInfo_ScLayout_ME13_Del',
'PurchaseInfo_ScLayout_ME13_GR',
'PurchaseInfo_ScLayout_ME13_Qnt',
'PurchaseInfo_ScLayout_ME13_Ref',
'PurchaseInfo_ScLayout_ME13_Texts',
'PurchaseInfo_ScLayout_ME13',
'PurchaseInfo_ScLayout_ME15_Adm',
'PurchaseInfo_ScLayout_ME15_Basic',
'PurchaseInfo_ScLayout_ME15_Cond',
'PurchaseInfo_ScLayout_ME15_Del',
'PurchaseInfo_ScLayout_ME15_GR',
'PurchaseInfo_ScLayout_ME15_Qnt',
'PurchaseInfo_ScLayout_ME15_Ref',
'PurchaseInfo_ScLayout_ME15_Texts',
'PurchaseInfo_ScLayout_ME15',
'PurchaseInfo_ScreenLayout',
'PurchaseOrder_AdmData',
'PurchaseOrder_AdmHeader',
'PurchaseOrder_AdmItem',
'PurchaseOrder_BasicData',
'PurchaseOrder_Charateristics',
'PurchaseOrder_Classes',
'PurchaseOrder_Classification',
'PurchaseOrder_DeadlineMonitoring',
'PurchaseOrder_DelMonitoring',
'PurchaseOrder_DocumentTypes',
'PurchaseOrder_Enjoy',
'PurchaseOrder_GR_IR',
'PurchaseOrder_NumberRange',
'PurchaseOrder_Q&P',
'PurchaseOrder_RefHeader',
'PurchaseOrder_RefItem',
'PurchaseOrder_ScControl',
'PurchaseOrder_ScreenLayout',
'PurchaseOrder_SuplyingPlant',
'PurchaseOrder_Terms',
'PurchaseOrderFieldSelection',
'PurchaseOrderScreenLayoutNewEntry',
'Purchasing_AdmData',
'Purchasing_AdmHeader',
'Purchasing_AdmItem',
'Purchasing_BasicData',
'Purchasing_Charateristics',
'Purchasing_Classes',
'Purchasing_Classification',
'purchasing_DeadlineMonitoring',
'Purchasing_DelMonitoring',
'Purchasing_DocumentTypes',
'Purchasing_Enjoy',
'Purchasing_GR_IR',
'Purchasing_NumberRange',
'Purchasing_Q&P',
'Purchasing_Quota_Define',
'Purchasing_Quota_DefineNewEntry',
'Purchasing_Quota_NumRange',
'Purchasing_RefHeader',
'Purchasing_RefItem',
'Purchasing_RFQ_AdmData',
'Purchasing_RFQ_AdmHeader',
'Purchasing_RFQ_AdmItem',
'Purchasing_RFQ_BasicData',
'Purchasing_RFQ_DeadlineMonitoring',
'Purchasing_RFQ_DelMonitoring',
'Purchasing_RFQ_Doc',
'Purchasing_RFQ_Enjoy',
'Purchasing_RFQ_GR_IR',
'Purchasing_RFQ_NumRange',
'Purchasing_RFQ_Q&P',
'Purchasing_RFQ_RefHeader',
'Purchasing_RFQ_RefItem',
'Purchasing_RFQ_Rel',
'Purchasing_RFQ_ScControl',
'Purchasing_RFQ_ScLayout_FieldSelection',
'Purchasing_RFQ_ScLayout',
'Purchasing_RFQ_ScLayoutNewEntry',
'Purchasing_RFQ_SuplyingPlant',
'Purchasing_RFQ_Terms',
'Purchasing_ScControl',
'Purchasing_ScreenLayout',
'Purchasing_ScreenLayoutNewEntry',
'Purchasing_Sourcelist',
'Purchasing_SuplyingPlant',
'Purchasing_Terms',
'PurchasingFieldSelection',
'purchasingOrgToPlant',
'purrchaceorg',
'refrencePurchasingOrg',
'ruleBySalesArea',
'saleDocumentItem_AssignCategory_NewEntry',
'saleDocumentItem_AssignCategory',
'saleDocumentItem_category_NewEntry',
'saleDocumentItem_category',
'saleDocumentItem_categoryGroups_NewEntry',
'saleDocumentItem_categoryGroups',
'saleDocumentItem_categoryUsage_NewEntry',
'saleDocumentItem_categoryUsage',
'Sales_District',
'sales',
'SalesDistrictNewEntry',
'SalesDocumentHeader1',
'SalesDocumentHeader1NewEntry',
'SalesDocumentHeader2',
'salesdocumentheader3_ASOTPFSA_NewEntry',
'salesdocumentheader3_ASOTPFSA',
'salesdocumentheader3_CD',
'salesdocumentheader3_CDC',
'salesdocumentheader3_CSO',
'SalesDocumentHeader3',
'salesgrp',
'salesoffice',
'salesorganization',
'SD_BasicFunction',
'SD_Billing_Processing_accessSequence',
'SD_Billing_Processing_ConditionTable',
'SD_Billing_Processing_ConditionTypes',
'SD_Billing_Processing_NumRange',
'SD_Billing_Processing_Pricingprocedure',
'SD_Billing',
'SD_BillingDoc_NumRange',
'SD_BillingDoc_Types_NewEntry',
'SD_BillingDoc_Types',
'SD_Credit_Assign_Deltype',
'SD_Credit_Assign_OrderType',
'SD_Credit_Assign',
'SD_Credit_Control',
'SD_Credit_ControlNewEntry',
'SD_Credit_Group',
'SD_Credit_GroupNewEntry',
'SD_CreditLimit',
'SD_CreditManagment',
'SD_DefineRoute_Connection_New',
'SD_DefineRoute_Connection',
'SD_DefineRoute_Shipping_New',
'SD_DefineRoute_Shipping',
'Sd_DefineRoute_Stage_New',
'SD_DefineRoute_Stage',
'SD_DefineRoute_Transport_New',
'SD_DefineRoute_Transport',
'SD_DefineRoutes',
'SD_RouteDet_Determination_Delivery_New',
'SD_RouteDet_Determination_Delivery',
'SD_RouteDet_Determination_New',
'SD_RouteDet_Determination_Order_New',
'SD_RouteDet_Determination_Order',
'SD_RouteDet_Determination',
'SD_RouteDet_Shipping',
'SD_RouteDet_Transport_New',
'SD_RouteDet_Transport',
'SD_RouteDet_Transportation_New',
'SD_RouteDet_Transportation',
'SD_RouteDet_Weightgrp_Detail_New',
'SD_RouteDet_Weightgrp_Detail',
'SD_RouteDet_Weightgrp_New',
'SD_RouteDet_WeightGrp',
'SD_RouteDet',
'SD_Sales',
'SD_Text_TextType_Agency_Change1_Access_New',
'SD_Text_TextType_Agency_Change1_Access',
'SD_Text_TextType_Agency_Change1_AccessID_New',
'SD_Text_TextType_Agency_Change1_AccessID',
'SD_Text_TextType_Agency_Change1_Assgn',
'SD_Text_TextType_Agency_Change1_ID_New',
'SD_Text_TextType_Agency_Change1_ID',
'SD_Text_TextType_Agency_Change1_NewEntry',
'SD_Text_TextType_Agency_Change1',
'SD_Text_TextType_Agency_Change2_Access_New',
'SD_Text_TextType_Agency_Change2_Access',
'SD_Text_TextType_Agency_Change2_AccessID_New',
'SD_Text_TextType_Agency_Change2_AccessID',
'SD_Text_TextType_Agency_Change2_Assgn',
'SD_Text_TextType_Agency_Change2_ID_New',
'SD_Text_TextType_Agency_Change2_ID',
'SD_Text_TextType_Agency_Change2_NewEntry',
'SD_Text_TextType_Agency_Change2',
'SD_Text_TextType_Agency_TextType1_New',
'SD_Text_TextType_Agency_TextType1',
'SD_Text_TextType_Agency_TextType2_New',
'SD_Text_TextType_Agency_TextType2',
'SD_Text_TextType_billingDoc_Change1_Access_New',
'SD_Text_TextType_billingDoc_Change1_Access',
'SD_Text_TextType_billingDoc_Change1_AccessID_New',
'SD_Text_TextType_billingDoc_Change1_AccessID',
'SD_Text_TextType_billingDoc_Change1_Assgn',
'SD_Text_TextType_billingDoc_Change1_ID_New',
'SD_Text_TextType_billingDoc_Change1_ID',
'SD_Text_TextType_billingDoc_Change1_NewEntry',
'SD_Text_TextType_billingDoc_Change1',
'SD_Text_TextType_billingDoc_Change2_Access_New',
'SD_Text_TextType_billingDoc_Change2_Access',
'SD_Text_TextType_billingDoc_Change2_AccessID_New',
'SD_Text_TextType_billingDoc_Change2_AccessID',
'SD_Text_TextType_billingDoc_Change2_Assgn',
'SD_Text_TextType_billingDoc_Change2_ID_New',
'SD_Text_TextType_billingDoc_Change2_ID',
'SD_Text_TextType_billingDoc_Change2_NewEntry',
'SD_Text_TextType_billingDoc_Change2',
'SD_Text_TextType_billingDoc_TextType1_New',
'SD_Text_TextType_billingDoc_TextType1',
'SD_Text_TextType_billingDoc_TextType2_New',
'SD_Text_TextType_billingDoc_TextType2',
'SD_Text_TextType_Cust_Change1_Assgn',
'SD_Text_TextType_Cust_Change1_ID_New',
'SD_Text_TextType_Cust_Change1_ID',
'SD_Text_TextType_Cust_Change1_NewEntry',
'SD_Text_TextType_Cust_Change1',
'SD_Text_TextType_Cust_Change2_Assgn',
'SD_Text_TextType_Cust_Change2_ID_New',
'SD_Text_TextType_Cust_Change2_ID',
'SD_Text_TextType_Cust_Change2_NewEntry',
'SD_Text_TextType_Cust_Change2',
'SD_Text_TextType_Cust_Change3_Assgn',
'SD_Text_TextType_Cust_Change3_ID_New',
'SD_Text_TextType_Cust_Change3_ID',
'SD_Text_TextType_Cust_Change3_NewEntry',
'SD_Text_TextType_Cust_Change3',
'SD_Text_TextType_Cust_TextType1_New',
'SD_Text_TextType_Cust_TextType1',
'SD_Text_TextType_Cust_TextType2_New',
'SD_Text_TextType_Cust_TextType2',
'SD_Text_TextType_Cust_TextType3_New',
'SD_Text_TextType_Cust_TextType3',
'SD_Text_TextType_Delivery_Change1_Access_New',
'SD_Text_TextType_Delivery_Change1_Access',
'SD_Text_TextType_Delivery_Change1_AccessID_New',
'SD_Text_TextType_Delivery_Change1_AccessID',
'SD_Text_TextType_Delivery_Change1_Assgn',
'SD_Text_TextType_Delivery_Change1_ID_New',
'SD_Text_TextType_Delivery_Change1_ID',
'SD_Text_TextType_Delivery_Change1_NewEntry',
'SD_Text_TextType_Delivery_Change1',
'SD_Text_TextType_Delivery_Change2_Access_New',
'SD_Text_TextType_Delivery_Change2_Access',
'SD_Text_TextType_Delivery_Change2_AccessID_New',
'SD_Text_TextType_Delivery_Change2_AccessID',
'SD_Text_TextType_Delivery_Change2_Assgn',
'SD_Text_TextType_Delivery_Change2_ID_New',
'SD_Text_TextType_Delivery_Change2_ID',
'SD_Text_TextType_Delivery_Change2_NewEntry',
'SD_Text_TextType_Delivery_Change2',
'SD_Text_TextType_Delivery_TextType1_New',
'SD_Text_TextType_Delivery_TextType1',
'SD_Text_TextType_Delivery_TextType2_New',
'SD_Text_TextType_Delivery_TextType2',
'SD_Text_TextType_Financial_Change1_Assgn',
'SD_Text_TextType_Financial_Change1_ID_New',
'SD_Text_TextType_Financial_Change1_ID',
'SD_Text_TextType_Financial_Change1_NewEntry',
'SD_Text_TextType_Financial_Change1',
'SD_Text_TextType_Financial_TextType1_New',
'SD_Text_TextType_Financial_TextType1',
'SD_Text_TextType_Info_Change1_Assgn',
'SD_Text_TextType_Info_Change1_ID_New',
'SD_Text_TextType_Info_Change1_ID',
'SD_Text_TextType_Info_Change1_NewEntry',
'SD_Text_TextType_Info_Change1',
'SD_Text_TextType_Info_TextType1_New',
'SD_Text_TextType_Info_TextType1',
'SD_Text_TextType_Legal_Change1_Assgn',
'SD_Text_TextType_Legal_Change1_ID_New',
'SD_Text_TextType_Legal_Change1_ID',
'SD_Text_TextType_Legal_Change1_NewEntry',
'SD_Text_TextType_Legal_Change1',
'SD_Text_TextType_Legal_Change2_ID_New',
'SD_Text_TextType_Legal_Change2_ID',
'SD_Text_TextType_Legal_TextType1_New',
'SD_Text_TextType_Legal_TextType1',
'SD_Text_TextType_Pricing_Change1_Assgn',
'SD_Text_TextType_Pricing_Change1_ID_New',
'SD_Text_TextType_Pricing_Change1_ID',
'SD_Text_TextType_Pricing_Change1_NewEntry',
'SD_Text_TextType_Pricing_Change1',
'SD_Text_TextType_Pricing_Change2_Assgn',
'SD_Text_TextType_Pricing_Change2_ID_New',
'SD_Text_TextType_Pricing_Change2_ID',
'SD_Text_TextType_Pricing_Change2_NewEntry',
'SD_Text_TextType_Pricing_Change2',
'SD_Text_TextType_Pricing_TextType1_New',
'SD_Text_TextType_Pricing_TextType1',
'SD_Text_TextType_Pricing_TextType2_New',
'SD_Text_TextType_Pricing_TextType2',
'SD_Text_TextType_SalesAct_Change1_Access_New',
'SD_Text_TextType_SalesAct_Change1_Access',
'SD_Text_TextType_SalesAct_Change1_AccessID_New',
'SD_Text_TextType_SalesAct_Change1_AccessID',
'SD_Text_TextType_SalesAct_Change1_Assgn',
'SD_Text_TextType_SalesAct_Change1_ID_New',
'SD_Text_TextType_SalesAct_Change1_ID',
'SD_Text_TextType_SalesAct_Change1_NewEntry',
'SD_Text_TextType_SalesAct_Change1',
'SD_Text_TextType_SalesAct_TextType1_New',
'SD_Text_TextType_SalesAct_TextType1',
'SD_Text_TextType_SalesDoc_Change1_Access_New',
'SD_Text_TextType_SalesDoc_Change1_Access',
'SD_Text_TextType_SalesDoc_Change1_AccessID_New',
'SD_Text_TextType_SalesDoc_Change1_AccessID',
'SD_Text_TextType_SalesDoc_Change1_Assgn',
'SD_Text_TextType_SalesDoc_Change1_ID_New',
'SD_Text_TextType_SalesDoc_Change1_ID',
'SD_Text_TextType_SalesDoc_Change1_NewEntry',
'SD_Text_TextType_SalesDoc_Change1',
'SD_Text_TextType_SalesDoc_Change2_Access_New',
'SD_Text_TextType_SalesDoc_Change2_Access',
'SD_Text_TextType_SalesDoc_Change2_AccessID_New',
'SD_Text_TextType_SalesDoc_Change2_AccessID',
'SD_Text_TextType_SalesDoc_Change2_Assgn',
'SD_Text_TextType_SalesDoc_Change2_ID_New',
'SD_Text_TextType_SalesDoc_Change2_ID',
'SD_Text_TextType_SalesDoc_Change2_NewEntry',
'SD_Text_TextType_SalesDoc_Change2',
'SD_Text_TextType_SalesDoc_TextType1_New',
'SD_Text_TextType_SalesDoc_TextType1',
'SD_Text_TextType_SalesDoc_TextType2_New',
'SD_Text_TextType_SalesDoc_TextType2',
'SD_Text_TextType_Shipment_Change1_Assgn',
'SD_Text_TextType_Shipment_Change1_ID_New',
'SD_Text_TextType_Shipment_Change1_ID',
'SD_Text_TextType_Shipment_Change1_NewEntry',
'SD_Text_TextType_Shipment_Change1',
'SD_Text_TextType_Shipment_TextType1_New',
'SD_Text_TextType_Shipment_TextType1',
'SD_Text_TextType_Trading_Change1_Access_New',
'SD_Text_TextType_Trading_Change1_Access',
'SD_Text_TextType_Trading_Change1_AccessID_New',
'SD_Text_TextType_Trading_Change1_AccessID',
'SD_Text_TextType_Trading_Change1_Assgn copy',
'SD_Text_TextType_Trading_Change1_Assgn',
'SD_Text_TextType_Trading_Change1_ID_New',
'SD_Text_TextType_Trading_Change1_ID',
'SD_Text_TextType_Trading_Change1_NewEntry',
'SD_Text_TextType_Trading_Change1',
'SD_Text_TextType_Trading_Change2_Access_New',
'SD_Text_TextType_Trading_Change2_Access',
'SD_Text_TextType_Trading_Change2_AccessID_New',
'SD_Text_TextType_Trading_Change2_AccessID',
'SD_Text_TextType_Trading_Change2_Assgn',
'SD_Text_TextType_Trading_Change2_ID_New',
'SD_Text_TextType_Trading_Change2_ID',
'SD_Text_TextType_Trading_Change2_NewEntry',
'SD_Text_TextType_Trading_Change2',
'SD_Text_TextType_Trading_TextType1_New',
'SD_Text_TextType_Trading_TextType1',
'SD_Text_TextType_Trading_TextType2_New',
'SD_Text_TextType_Trading_TextType2',
'SD_Text_TextType',
'setupSalesArea',
'Shipping_Condition',
'Shipping_ConditionNewEntry',
'shippingpoint',
'StandardpurchasingOrg',
'Statetable',
'storageloc',
'succ',
'Unittable',
'Vendor_Add-PurchData',
'Vendor_Change_Accounting',
'Vendor_Change_Centrally_ADDPurch',
'Vendor_Change_Centrally_Cc_Acc copy',
'Vendor_Change_Centrally_Cc_Acc',
'Vendor_Change_Centrally_Cc_Corr copy',
'Vendor_Change_Centrally_Cc_Corr',
'Vendor_Change_Centrally_Cc_Pay',
'Vendor_Change_Centrally_Cc_WH',
'Vendor_Change_Centrally_Cc',
'Vendor_Change_Centrally_Gen_Add',
'Vendor_Change_Centrally_Gen_Comm',
'Vendor_Change_Centrally_Gen_cont',
'Vendor_Change_Centrally_Gen_Contact copy',
'Vendor_Change_Centrally_Gen_Contact',
'Vendor_Change_Centrally_Gen_Pay copy',
'Vendor_Change_Centrally_Gen_Pay',
'Vendor_Change_Centrally_Gen',
'Vendor_Change_Centrally_Partner',
'Vendor_Change_Centrally_Plant_PlantLvl',
'Vendor_Change_Centrally_Plant_PurchData',
'Vendor_Change_Centrally_Plant',
'Vendor_Change_Centrally_Purch',
'Vendor_Change_Centrally_PurchData',
'Vendor_Change_Centrally_VSR_SUBPartner',
'Vendor_Change_Centrally_VSR_SUBPurch',
'Vendor_Change_Centrally_VSR',
'Vendor_Change_Centrally',
'Vendor_Change_CompCode_Acc',
'Vendor_Change_CompCode_Corr',
'Vendor_Change_CompCode_Pay',
'Vendor_Change_CompCode_WH',
'Vendor_Change_CompCode',
'Vendor_Change_Gen_Add',
'Vendor_Change_Gen_Comm',
'Vendor_Change_Gen_Cont',
'Vendor_Change_Gen_Contact',
'Vendor_Change_Gen_Pay',
'Vendor_Change_Gen',
'Vendor_Change_Purch_ADDPurch',
'Vendor_Change_Purch_Gen_Add',
'Vendor_Change_Purch_Gen_Comm',
'Vendor_Change_Purch_Gen_cont',
'Vendor_Change_Purch_Gen_Contact',
'Vendor_Change_Purch_Gen_Pay',
'Vendor_Change_Purch_Partner',
'Vendor_Change_Purch_Plant_PlantLvl',
'Vendor_Change_Purch_Plant_PurchData',
'Vendor_Change_Purch_PurchData',
'Vendor_Change_Purch_VSR_SUBPartner',
'Vendor_Change_Purch_VSR_SUBPurch',
'Vendor_Change_Purchasing_Gen',
'Vendor_Change_Purchasing_Plant',
'Vendor_Change_Purchasing_Purch',
'Vendor_Change_Purchasing_VSR',
'Vendor_Change_Purchasing',
'Vendor_Create_Accounting',
'Vendor_Create_Centrally_ADDPurch',
'Vendor_Create_Centrally_Cc_Acc',
'Vendor_Create_Centrally_Cc_Corr',
'Vendor_Create_Centrally_Cc_Pay',
'Vendor_Create_Centrally_Cc_WH',
'Vendor_Create_Centrally_Cc',
'Vendor_Create_Centrally_Gen_Add copy',
'Vendor_Create_Centrally_Gen_Add',
'Vendor_Create_Centrally_Gen_Comm copy',
'Vendor_Create_Centrally_Gen_Comm',
'Vendor_Create_Centrally_Gen_cont copy',
'Vendor_Create_Centrally_Gen_cont',
'Vendor_Create_Centrally_Gen_Contact',
'Vendor_Create_Centrally_Gen_Pay',
'Vendor_Create_Centrally_Gen',
'Vendor_Create_Centrally_Partner',
'Vendor_Create_Centrally_Plant_PlantLvl',
'Vendor_Create_Centrally_Plant_PurchData',
'Vendor_Create_Centrally_Plant',
'Vendor_Create_Centrally_Purch',
'Vendor_Create_Centrally_PurchData',
'Vendor_Create_Centrally_VSR_SUBPartner',
'Vendor_Create_Centrally_VSR_SUBPurch',
'Vendor_Create_Centrally_VSR',
'Vendor_Create_Centrally',
'Vendor_Create_CompCode_Acc',
'Vendor_Create_CompCode_Corr',
'Vendor_Create_CompCode_Pay',
'Vendor_Create_CompCode_WH',
'Vendor_Create_CompCode',
'Vendor_Create_Gen_Add',
'Vendor_Create_Gen_Comm',
'Vendor_Create_Gen_Cont',
'Vendor_Create_Gen_Contact',
'Vendor_Create_Gen_Pay',
'Vendor_Create_Gen',
'Vendor_Create_Purchasing_Gen',
'Vendor_Create_Purchasing_Plant',
'Vendor_Create_Purchasing_Purch',
'Vendor_Create_Purchasing_VSR',
'Vendor_Create_Purchasing',
'Vendor_Display_Accounting',
'Vendor_Display_Centrally_ADDPurch',
'Vendor_Display_Centrally_Cc_Acc',
'Vendor_Display_Centrally_Cc_Corr',
'Vendor_Display_Centrally_Cc_Pay',
'Vendor_Display_Centrally_Cc_WH',
'Vendor_Display_Centrally_Cc',
'Vendor_Display_Centrally_Gen_Add',
'Vendor_Display_Centrally_Gen_Comm',
'Vendor_Display_Centrally_Gen_cont',
'Vendor_Display_Centrally_Gen_Contact',
'Vendor_Display_Centrally_Gen_Pay',
'Vendor_Display_Centrally_Gen',
'Vendor_Display_Centrally_Partner',
'Vendor_Display_Centrally_Plant_PlantLvl',
'Vendor_Display_Centrally_Plant_PurchData',
'Vendor_Display_Centrally_Plant',
'Vendor_Display_Centrally_Purch',
'Vendor_Display_Centrally_PurchData',
'Vendor_Display_Centrally_VSR_SUBPartner',
'Vendor_Display_Centrally_VSR_SUBPurch',
'Vendor_Display_Centrally_VSR',
'Vendor_Display_Centrally',
'Vendor_Display_Compcode_Acc',
'Vendor_Display_Compcode_Corr',
'Vendor_Display_Compcode_Pay',
'Vendor_Display_Compcode_WH',
'Vendor_Display_CompCode',
'Vendor_Display_Gen_Add',
'Vendor_Display_Gen_Comm',
'Vendor_Display_Gen_Cont',
'Vendor_Display_Gen_Contact',
'Vendor_Display_Gen_Pay',
'Vendor_Display_Gen',
'Vendor_Display_Purch_ADDPurch',
'Vendor_Display_Purch_Gen_Add',
'Vendor_Display_Purch_Gen_Comm',
'Vendor_Display_Purch_Gen_cont',
'Vendor_Display_Purch_Gen_Contact',
'Vendor_Display_Purch_Gen_Pay',
'Vendor_Display_Purch_Partner',
'Vendor_Display_Purch_Plant_PlantLvl',
'Vendor_Display_Purch_Plant_PurchData',
'Vendor_Display_Purch_PurchData',
'Vendor_Display_Purch_VSR_SUBPartner',
'Vendor_Display_Purch_VSR_SUBPurch',
'Vendor_Display_Purchasing_Gen',
'Vendor_Display_Purchasing_Plant',
'Vendor_Display_Purchasing_Purch',
'Vendor_Display_Purchasing_VSR',
'Vendor_Display_Purchasing',
'Vendor_PartnerUsage',
'Vendor_PlantLevel',
'Vendor_PlantUsage',
'Vendor_PurchData',
'Vendor_PurchData2',
'Vendor_PurchPlant',
'Vendor_PurchRange',
'VendorAccountGroup',
'VendorAccountGroupForm',
'VendorDefineNumRange',
'VendorDefineScreen',
'VendordefineScreenNewEntry',
'VendorDefineTransaction',
'VendorSubRange_Add-PurchData',
'VendorSubRange_PartnerUsage',

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


