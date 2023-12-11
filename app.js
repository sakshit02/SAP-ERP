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
  'editHome',
  'edit/companyform',
  'loginform',
  'AccessSequenceFields',
  'accountgrp',
  'assign-sales-dist-plant',
  'AssignBusinessArea',
  'assigncompanycode',
  'assigndistributionChannel',
  'assignDivision',
  'assignPlant',
  'assignPurchasingOrg',
  'assignsalesgrp',
  'assignPurchasingOffice',
  'assignSalesOrganisation',
  'assignSalesToCredit',
  'AssignShippingPoint',
  'assignToCreditControl',
  'assignbusinessareaBySales',
  'assignSalesOffice',
  'business',
  'companyform',
  'Countrytable',
  'creditcontrolarea',
  'Currencytable',
  'distribuation',
  'distributionChannel',
  'division',
  'functionalarea',
  'Languagetable',
  'loadintpy',
  'login',
  'numrange',
  'plant',
  'profitcenter',
  'purchasingOrgToPlant',
  'purrchaceorg',
  'refrencePurchasingOrg',
  'ruleBySalesArea',
  'sales',
  'salesgrp',
  'salesoffice',
  'salesorganization',
  'setupSalesArea',
  'shippingpoint',
  'StandardpurchasingOrg',
  'Statetable',
  'storageloc',
  'Unittable',
  'home',
  'creditcontrolarea',
  'companycode',
  'Countrytable',
  'accessSequence',
  'AccessSequence_NewEntry',
  'AccessTable',
  'AccessTable_NewEntry',
  'AccessFields',
  'ConditionTypes',
  'Condition',
  'ConditionTable',
  'DefAssPricingprocedure',
  'ActivityMaintainPricing',
  'ActivityDocumentPricing',
  'ActivityDetermination',
  'ActivityDefineDocument',
  'ActivityDefineCustomer',
  'ActivityAssignDocument',
  'Activity',
  'ControldataTable',
  'ControldataTable_NewEntry',
  'MaintainPricingNewEntry',
  'DefineCustomerNewEntry',
  'DefineDocumentNewEntry',
  'DeterminationNewEntry',
  'SalesDocumentHeader1',
  'SalesDocumentHeader1NewEntry',
  'SalesDocumentHeader2',
  'SalesDocumentHeader2NewEntry',
  'SalesDocumentHeader3',
  'SalesDocumentHeader3NewEntry',
  'salesdocumentheader3_CSO',
  'salesdocumentheader3_CDC',
  'salesdocumentheader3_CD',
  'salesdocumentheader3_ASOTPFSA',
  'salesdocumentheader3_ASOTPFSA_NewEntry',
  'saleDocumentItem_category',
  'saleDocumentItem_category_NewEntry',
  'saleDocumentItem_categoryGroups',
  'saleDocumentItem_categoryGroups_NewEntry',
  'saleDocumentItem_categoryUsage',
  'saleDocumentItem_categoryUsage_NewEntry',
  'saleDocumentItem_AssignCategory',
  'saleDocumentItem_AssignCategory_NewEntry',
  'Purchasing_NumberRange',
  'Purchasing_DocumentTypes',
  'Purchasing_Charateristics',
  'Purchasing_Classes',
  'Sales_District',
  'SalesDistrictNewEntry',
  'Customer_Group',
  'Customer_GroupNewEntry',
  'PartnerDetermination',
  'PartFuncProcedure',
  'PartDetmProcedureAssgn',
  'PartGrpFuncAssn',
  'Price_Group',
  'Price_GroupNewEntry',
  'Price_List',
  'Price_ListNewEntry',
  'Delivery_Priorities',
  'Delivery_PrioritiesNewEntry',
  'Shipping_Condition',
  'Shipping_ConditionNewEntry',
  'Account_assignmentGrp',
  'Account_assignmentGrpNewEntry',
  'Inco_Terms',
  'Inco_TermsNewEntry',
  'accountgrp_SalesData',
  'accountgrp_GeneralData',
  'accountgrp_CC',
  'PurchaseInfo_ScLayout',
  'PurchaseInfo_ScLayout_ME11',
  'PurchaseInfo_ScLayout_ME12',
  'PurchaseInfo_ScLayout_ME13',
  'PurchaseInfo_ScLayout_ME15',
  'PurchaseInfo_ScLayout_ME11_GR',
  'PurchaseInfo_ScLayout_ME11_Basic',
  'PurchaseInfo_ScLayout_ME11_Ref',
  'PurchaseInfo_ScLayout_ME11_Adm',
  'PurchaseInfo_ScLayout_ME11_Qnt',
  'PurchaseInfo_ScLayout_ME11_Cond',
  'PurchaseInfo_ScLayout_ME11_Del',
  'PurchaseInfo_ScLayout_ME11_Texts',
  'PurchaseInfo_ScLayout_ME12_GR',
  'PurchaseInfo_ScLayout_ME12_Basic',
  'PurchaseInfo_ScLayout_ME12_Ref',
  'PurchaseInfo_ScLayout_ME12_Adm',
  'PurchaseInfo_ScLayout_ME12_Qnt',
  'PurchaseInfo_ScLayout_ME12_Cond',
  'PurchaseInfo_ScLayout_ME12_Del',
  'PurchaseInfo_ScLayout_ME12_Texts',
  'PurchaseInfo_ScLayout_ME13_GR',
  'PurchaseInfo_ScLayout_ME13_Basic',
  'PurchaseInfo_ScLayout_ME13_Ref',
  'PurchaseInfo_ScLayout_ME13_Adm',
  'PurchaseInfo_ScLayout_ME13_Qnt',
  'PurchaseInfo_ScLayout_ME13_Cond',
  'PurchaseInfo_ScLayout_ME13_Del',
  'PurchaseInfo_ScLayout_ME13_Texts',
  'PurchaseInfo_ScLayout_ME15_GR',
  'PurchaseInfo_ScLayout_ME15_Basic',
  'PurchaseInfo_ScLayout_ME15_Ref',
  'PurchaseInfo_ScLayout_ME15_Adm',
  'PurchaseInfo_ScLayout_ME15_Qnt',
  'PurchaseInfo_ScLayout_ME15_Cond',
  'PurchaseInfo_ScLayout_ME15_Del',
  'PurchaseInfo_ScLayout_ME15_Texts',
  'Purchasing_Sourcelist',
  'PurchaseInfo_ScreenLayout',
  'PurchaseInfo_NumberRange',
  'Purchasing_Quota_NumRange',
  'Purchasing_Quota_Define',
  'Purchasing_Quota_DefineNewEntry',
  'Purchasing_RFQ_NumRange',
  'Purchasing_RFQ_ScLayout',
  'Purchasing_RFQ_ScLayoutNewEntry',
  'Purchasing_RFQ_ScLayout_FieldSelection',
  'Purchasing_RFQ_BasicData',
  'Purchasing_RFQ_Terms',
  'Purchasing_RFQ_RefHeader',
  'Purchasing_RFQ_AdmHeader',
  'Purchasing_RFQ_SuplyingPlant',
  'Purchasing_RFQ_Q&P',
  'Purchasing_RFQ_DeadlineMonitoring',
  'Purchasing_RFQ_GR_IR',
  'Purchasing_RFQ_RefItem',
  'Purchasing_RFQ_AdmItem',
  'Purchasing_RFQ_ScControl',
  'Purchasing_RFQ_AdmData',
  'Purchasing_RFQ_DelMonitoring',
  'Purchasing_RFQ_Enjoy',
  'Purchasing_RFQ_Rel',
  'Purchasing_RFQ_Doc',
  'account_Gen_Add',
  'account_Gen_Comm',
  'account_Gen_Cont',
  'account_Gen_Marketing',
  'aaccount_Gen_Pay',
  'account_Gen_Unloading',
  'account_Gen_Contact',
  'account_Gen_Foreign',
  'account_CC_AccMng',
  'account_Cc_Pay',
  'account_Cc_Corr',
  'account_Cc_Insurence',
  'account_Cc_WH',
  'account_Sales_Sales',
  'account_Sales_Shipping',
  'account_Sales_Billing',
  'account_Sales_Partner',
  'account_Sales_Documents',
  'VendorAccountGroup',
  'VendorDefineScreen',
  'VendorDefineTransaction',
  'VendorDefineNumRange',
  'VendorAccountGroupForm',
  'VendordefineScreenNewEntry',
  'VendordefineScreen',
  'Vendor_PurchData',
  'Vendor_PurchPlant',
  'Vendor_PurchRange',
  'Vendor_PurchData2',
  'Vendor_PartnerUsage',
  'Vendor_Add-PurchData',
  'VendorSubRange_Add-PurchData',
  'VendorSubRange_PartnerUsage',
  'Vendor_PlantUsage',
  'Vendor_PlantLevel',
  'Vendor_Display_Accounting',
  'Vendor_Display_Purchasing',
  'Vendor_Display_Centrally',
  'Vendor_Change_Accounting',
  'Vendor_Change_Purchasing',
  'Vendor_Change_Centrally',
  'Vendor_Create_Accounting',
  'Vendor_Create_Purchasing',
  'Vendor_Create_Centrally',
  'Vendor_Create_Gen',
  'Vendor_Create_CompCode',
  'Vendor_Change_Gen',
  'Vendor_Change_CompCode',
  'Vendor_Display_Gen',
  'Vendor_Display_CompCode',
  'Vendor_Create_Purchasing_Gen',
  'Vendor_Create_Purchasing_Purch',
  'Vendor_Create_Purchasing_VSR',
  'Vendor_Create_Purchasing_Plant',
  'Vendor_Change_Purchasing_Gen',
  'Vendor_Change_Purchasing_Purch',
  'Vendor_Change_Purchasing_VSR',
  'Vendor_Change_Purchasing_Plant',
  'Vendor_Display_Purchasing_Gen',
  'Vendor_Display_Purchasing_Purch',
  'Vendor_Display_Purchasing_VSR',
  'Vendor_Display_Purchasing_Plant',
  'Vendor_Create_Centrally_Cc',
  'Vendor_Create_Centrally_Purch',
  'Vendor_Create_Centrally_VSR',
  'Vendor_Create_Centrally_Plant',
  'Vendor_Create_Centrally_Gen',
  'Vendor_Change_Centrally_Cc',
  'Vendor_Change_Centrally_Purch',
  'Vendor_Change_Centrally_VSR',
  'Vendor_Change_Centrally_Plant',
  'Vendor_Change_Centrally_Gen',
  'Vendor_Display_Centrally_Cc',
  'Vendor_Display_Centrally_Purch',
  'Vendor_Display_Centrally_VSR',
  'Vendor_Display_Centrally_Plant',
  'Vendor_Display_Centrally_Gen',
  'Vendor_Change_Gen_Add',
  'Vendor_Change_Gen_Cont',
  'Vendor_Change_Gen_Contact',
  'Vendor_Change_Gen_Pay',
  'Vendor_Change_Gen_Comm',
  'Vendor_Change_CompCode_Acc',
  'Vendor_Change_CompCode_Corr',
  'Vendor_Change_CompCode_Pay',
  'Vendor_Change_CompCode_WH',
  'Vendor_Create_Gen_Add',
  'Vendor_Create_Gen_Cont',
  'Vendor_Create_Gen_Contact',
  'Vendor_Create_Gen_Pay',
  'Vendor_Create_Gen_Comm',
  'Vendor_Create_CompCode_Acc',
  'Vendor_Create_CompCode_Corr',
  'Vendor_Create_CompCode_Pay',
  'Vendor_Create_CompCode_WH',
  'PurchaseOrderFieldSelection',
  'PurchasingFieldSelection',
  'Purchasing_BasicData',
  'Purchasing_Terms',
  'Purchasing_RefHeader',
  'Purchasing_AdmHeader',
  'Purchasing_SuplyingPlant',
  'Purchasing_Q&P',
  'Purchasing_DeadlineMonitoring',
  'Purchasing_GR_IR',
  'Purchasing_RefItem',
  'Purchasing_AdmItem',
  'Purchasing_ScControl',
  'Purchasing_AdmData',
  'Purchasing_DelMonitoring',
  'Purchasing_Enjoy',
  'PurchaseOrder_BasicData',
  'PurchaseOrder_Terms',
  'PurchaseOrder_RefHeader',
  'PurchaseOrder_AdmHeader',
  'PurchaseOrder_SuplyingPlant',
  'PurchaseOrder_Q&P',
  'PurchaseOrder_DeadlineMonitoring',
  'PurchaseOrder_GR_IR',
  'PurchaseOrder_RefItem',
  'PurchaseOrder_AdmItem',
  'PurchaseOrder_ScControl',
  'PurchaseOrder_AdmData',
  'PurchaseOrder_DelMonitoring',
  'PurchaseOrder_Enjoy',
  'Physical_Plant_Param',
  'Physical_Plant_ParamNewEntry',
  'Physical_Number_Assgn',
  'Physical_MIGO',
  'Physical_MIGO_Field',
  'Physical_MIGO_Movement',
  'Physical_Number_Assgn_Accounting',
  'Physical_Number_Assgn_Material',
  'Physical_Number_Assgn_Reservation',
  'Physical_Number_Assgn_Goods',
  'Physical_Number_Assgn_Accounting_Doc',
  'Physical_Number_Assgn_Accounting_Doc_NewEntry',
  'Physical_Number_Assgn_Accounting_Num',
  'Physical_Number_Assgn_Accounting_Issue',
  'Physical_Number_Assgn_Accounting_Automatic',
  'Physical_Number_Assgn_Accounting_Physical',
  'Physical_Number_Assgn_Accounting_Receipt',
  'Physical_Number_Assgn_Goods_Plant',
  'Physical_Number_Assgn_Goods_Num',
  'Physical_Number_Assgn_Goods_Interval',
  'Physical_Number_Assgn_Goods_Object',
  'Physical_Number_Assgn_Goods_Num_NewEntry',
  'Physical_Number_Assgn_Goods_Object_NewEntry',
  'Physical_Number_Assgn_MoveInitials',
  'Physical_Postings',
  'Physical_Postings_Storage',
  'Physical_Postings_Assignment',
  'Physical_Postings_ScLayout',
  'Physical_Postings_Storage_Plant',
  'Physical_Postings_Storage_Mvt',
  'Physical_Postings_Goods',
  'Physical_Postings_Goods_Plant',
  'Physical_Postings_Goods_Mvt',
  'Physical_Postings_Negative',
  'Physical_Postings_Negative_Stock_Plant_Loc',
  'Physical_Postings_Negative_Stock_Plant',
  'Physical_Postings_ScLayout_Overview',
  'Physical_Postings_ScLayout_Overview_Gen',
  'Physical_Postings_ScLayout_Overview_Acc',
  'Physical_Postings_ScLayout_Overview_Add',
  'Physical_Postings_ScLayout_Overview_MM',
  'Physical_Postings_ScLayout_Overview_Real',
  'Physical_Postings_ScLayout_Overview_Transfer',
  'Physical_Postings_ScLayout_Overview_War',
  'Physical_Postings_ScLayout_Overview_Pay',
  'Physical_Postings_ScLayout_Overview_Tax',
  'Physical_Postings_ScLayout_Overview_Foreign',
  'Physical_Postings_ScLayout_Overview_Cons',
  'Physical_Postings_ScLayout_Overview_Fin',
  'Physical_Receipt',
  'Physical_Receipt_Loc',
  'Physical_Receipt_Storage_Plant',
  'Physical_Receipt_Storage_Mvt',
  'Physical_Receipt_Purchase',
  'Physical_Receipt_Assignment',
  'Physical_Receipt_ScLayout',
  'Physical_Movements',
  'Physical_Movements_Storage',
  'Physical_Movements_Storage_Plant',
  'Physical_Movements_Storage_Mvt',
  'Physical_Movements_Assignment',
  'Physical_Movements_ScLayout',
  'Physical_Movements_ScLayout_Overview',
  'Physical_Movements_ScLayout_Overview_Gen',
  'Physical_Movements_ScLayout_Overview_Acc',
  'Physical_Movements_ScLayout_Overview_Add',
  'Physical_Movements_ScLayout_Overview_MM',
  'Physical_Movements_ScLayout_Overview_Real',
  'Physical_Movements_ScLayout_Overview_Transfer',
  'Physical_Movements_ScLayout_Overview_War',
  'Physical_Movements_ScLayout_Overview_Pay',
  'Physical_Movements_ScLayout_Overview_Tax',
  'Physical_Movements_ScLayout_Overview_Foreign',
  'Physical_Movements_ScLayout_Overview_Cons',
  'Physical_Movements_ScLayout_Overview_Fin',
  'Physical_Movements_Goods',
  'Physical_Movements_Goods_Plant',
  'Physical_Movements_Goods_Mvt',
  'Output_Determination',
  'Output_Determination_Billing',
  'Output_Det_Billing_Condition',
  'Output_Det_Billing_Condition_Table',
  'Output_Det_Billing_Output',
  'Output_Det_Billing_Output_NewEntry',
  'Output_Det_Billing_output_Mail',
  'Output_Det_Billing_Output_Mail_NewEntry',
  'Output_Det_Billing_output_Processing',
  'Output_Det_Billing_output_Processing_NewEntry',
  'Output_Det_Billing_output_Partner',
  'Output_Det_Billing_output_Partner_NewEntry',
  'Output_Det_Billing_Access',
  'Output_Det_Billing_Access_NewEntry',
  'Output_Det_Billing_AccessTable',
  'Output_Det_Billing_AccessTable_NewEntry',
  'Output_Det_Billing_AccessFields',
  'Output_Det_Billing_MaintainProcedure',
  'Output_Det_Billing_MaintainProcedure_NewEntry',
  'Output_Det_Billing_MaintainProcedure_ControldataTable',
  'Output_Det_Billing_MaintainProcedure_ControldataTable_NewEntry',
  'Physical_Number_Assgn_Reservation_Interval',
  'Physical_Number_Assgn_Reservation_Num',
  'Output_Det_Billing_AssignProcedure',
  'Output_Determination_SalesDoc',
  'Output_Det_SDoc_Condition',
  'Output_Det_SDoc_Condition_Table',
  'Output_Det_SDoc_Output',
  'Output_Det_SDoc_Output_NewEntry',
  'Output_Det_SDoc_output_Mail',
  'Output_Det_SDoc_Output_Mail_NewEntry',
  'Output_Det_SDoc_output_Processing',
  'Output_Det_SDoc_output_Processing_NewEntry',
  'Output_Det_SDoc_output_Partner',
  'Output_Det_SDoc_output_Partner_NewEntry',
  'Output_Det_SDoc_Access',
  'Output_Det_SDoc_Access_NewEntry',
  'Output_Det_SDoc_AccessTable',
  'Output_Det_SDoc_AccessTable_NewEntry',
  'Output_Det_SDoc_AccessFields',
  'Output_Det_SDoc_MaintainProcedure',
  'Output_Det_SDoc_MaintainProcedure_NewEntry',
  'Output_Det_SDoc_MaintainProcedure_ControldataTable',
  'Output_Det_SDoc_MaintainProcedure_ControldataTable_NewEntry',
  'Output_Det_SDoc_AssignProcedure',
  'Output_Det_SDoc_AssignProcedure_Header',
  'Output_Det_SDoc_AssignProcedure_Item',
  'Output_Determination_SalesActivity',
  'Output_Det_SA_Condition',
  'Output_Det_SA_Condition_Table',
  'Output_Det_SA_Output',
  'Output_Det_SA_Output_NewEntry',
  'Output_Det_SA_output_Mail',
  'Output_Det_SA_Output_Mail_NewEntry',
  'Output_Det_SA_output_Processing',
  'Output_Det_SA_output_Processing_NewEntry',
  'Output_Det_SA_output_Partner',
  'Output_Det_SA_output_Partner_NewEntry',
  'Output_Det_SA_Access',
  'Output_Det_SA_Access_NewEntry',
  'Output_Det_SA_AccessTable',
  'Output_Det_SA_AccessTable_NewEntry',
  'Output_Det_SA_AccessFields',
  'Output_Det_SA_MaintainProcedure',
  'Output_Det_SA_MaintainProcedure_NewEntry',
  'Output_Det_SA_MaintainProcedure_ControldataTable',
  'Output_Det_SA_MaintainProcedure_ControldataTable_NewEntry',
  'Output_Det_SA_AssignProcedure',
  'Free_Goods_NumRange',
  'Free_Goods_Condition',
  'Free_Goods_ConditionTable',
  'Free_Goods_accessSequenc',
  'Free_Goods_ConditionTypes',
  'Free_Goods_Pricingprocedure',
  'Free_Goods_Determination',
  'Free_Goods_DeterminationNewEntry',
  'FreeGoods_AccessSequence_NewEntry',
  'FreeGoods_AccessTable',
  'FreeGoods_AccessTable_NewEntry',
  'FreeGoods_AccessFields',
  'FreeGoods_PricingNewEntry',
  'FreeGoods_ControldataTable',
  'FreeGoods_ControldataTable_NewEntry',
  'SD_MasterData',
  'SD_BasicFunction',
  'SD_Sales',
  'SD_Billing',
  'SD_Billing_Processing_NumRange',
  'SD_Billing_Processing_Pricingprocedure',
  'SD_Billing_Processing_ConditionTypes',
  'SD_Billing_Processing_ConditionTable',
  'SD_Billing_Processing_accessSequence',
  'SD_Billing_Processing_Activity',
  'SD_BillingDoc_Types',
  'SD_BillingDoc_Types_NewEntry',
  'SD_BillingDoc_NumRange',
  'Lising_Exclusion',
  'Listing_Exclusion_Sales',
  'Listing_Exclusion_Sales_NewEntry',
  'Listing_Exclusion_Maintain',
  'Listing_Exclusion_Maintain_NewEntry',
  'Listing_Exclusion_Procedures',
  'Listing_Exclusion_Procedures_NewEntry',
  'Listing_Exclusion_Procedures_ControlData',
  'Listing_Exclusion_Procedures_ControlData_NewEntry',
  'Listing_Exclusion_Sequence',
  'Listing_Exclusion_Sequence_NewEntry',
  'Listing_Exclusion_Sequence_Access',
  'Listing_Exclusion_Sequence_Access_NewEntry',
  'Listing_Exclusion_Sequence_AccessFields',
  'Listing_Exclusion_Allowed',
  'Listing_Exclusion_Allowed_NewEntry',
  'Listing_Exclusion_Condition',
  'Listing_Exclusion_ConditionTable',
  'SD_CreditManagment',
  'SD_Credit_Group',
  'SD_Credit_GroupNewEntry',
  'SD_Credit_Assign',
  'SD_Credit_Control',
  'SD_Credit_ControlNewEntry',
  'SD_CreditLimit',
  'SD_Credit_Assign_OrderType',
  'SD_Credit_Assign_Deltype',
  'SD_Text_TextType_Agency_Change1',
  'SD_Text_TextType_Agency_Change1_NewEntry',
  'SD_Text_TextType_Agency_Change2',
  'SD_Text_TextType_Agency_Change2_NewEntry',
  'SD_Text_TextType_billingDoc_Change1',
  'SD_Text_TextType_billingDoc_Change1_NewEntry',
  'SD_Text_TextType_billingDoc_Change2',
  'SD_Text_TextType_billingDoc_Change2_NewEntry',
  'SD_Text_TextType_Cust_Change1',
  'SD_Text_TextType_Cust_Change1_NewEntry',
  'SD_Text_TextType_Cust_Change2',
  'SD_Text_TextType_Cust_Change2_NewEntry',
  'SD_Text_TextType_Cust_Change3',
  'SD_Text_TextType_Cust_Change3_NewEntry',
  'SD_Text_TextType_Delivery_Change1',
  'SD_Text_TextType_Delivery_Change1_NewEntry',
  'SD_Text_TextType_Delivery_Change2',
  'SD_Text_TextType_Delivery_Change2_NewEntry',
  'SD_Text_TextType_Financial_Change1',
  'SD_Text_TextType_Financial_Change1_NewEntry',
  'SD_Text_TextType_Info_Change1',
  'SD_Text_TextType_Info_Change1_NewEntry',
  'SD_Text_TextType_Legal_Change1',
  'SD_Text_TextType_Legal_Change1_NewEntry',
  'SD_Text_TextType_Pricing_Change1',
  'SD_Text_TextType_Pricing_Change1_NewEntry',
  'SD_Text_TextType_Pricing_Change2',
  'SD_Text_TextType_Pricing_Change2_NewEntry',
  'SD_Text_TextType_SalesAct_Change1',
  'SD_Text_TextType_SalesAct_Change1_NewEntry',
  'SD_Text_TextType_SalesDoc_Change1',
  'SD_Text_TextType_SalesDoc_Change1_NewEntry',
  'SD_Text_TextType_SalesDoc_Change2',
  'SD_Text_TextType_SalesDoc_Change2_NewEntry',
  'SD_Text_TextType_Shipment_Change1',
  'SD_Text_TextType_Shipment_Change1_NewEntry',
  'SD_Text_TextType_Trading_Change1',
  'SD_Text_TextType_Trading_Change1_NewEntry',
  'SD_Text_TextType_Trading_Change2',
  'SD_Text_TextType_Trading_Change2_NewEntry',
  'SD_Text_TextType_Agency_Change1_ID',
  'SD_Text_TextType_Agency_Change1_ID_New',
  'SD_Text_TextType_Agency_Change2_ID',
  'SD_Text_TextType_Agency_Change2_ID_New',
  'SD_Text_TextType_billingDoc_Change1_ID',
  'SD_Text_TextType_billingDoc_Change1_ID_New',
  'SD_Text_TextType_billingDoc_Change2_ID',
  'SD_Text_TextType_billingDoc_Change2_ID_New',
  'SD_Text_TextType_Cust_Change1_ID',
  'SD_Text_TextType_Cust_Change1_ID_New',
  'SD_Text_TextType_Cust_Change2_ID',
  'SD_Text_TextType_Cust_Change2_ID_New',
  'SD_Text_TextType_Cust_Change2_ID_New',
  'SD_Text_TextType_Cust_Change3_ID',
  'SD_Text_TextType_Cust_Change3_ID_New',
  'SD_Text_TextType_Delivery_Change1_ID',
  'SD_Text_TextType_Delivery_Change1_ID_New',
  'SD_Text_TextType_Delivery_Change2_ID',
  'SD_Text_TextType_Delivery_Change2_ID_New',
  'SD_Text_TextType_Financial_Change1_ID',
  'SD_Text_TextType_Financial_Change1_ID_New',
  'SD_Text_TextType_Info_Change1_ID',
  'SD_Text_TextType_Info_Change1_ID_New',
  'SD_Text_TextType_Legal_Change1_ID',
  'SD_Text_TextType_Legal_Change1_ID_New',
  'SD_Text_TextType_Pricing_Change1_ID',
  'SD_Text_TextType_Pricing_Change1_ID_New',
  'SD_Text_TextType_Pricing_Change2_ID',
  'SD_Text_TextType_Pricing_Change2_ID_New',
  'SD_Text_TextType_SalesAct_Change1_ID',
  'SD_Text_TextType_SalesAct_Change1_ID_New',
  'SD_Text_TextType_SalesDoc_Change1_ID',
  'SD_Text_TextType_SalesDoc_Change1_ID_New',
  'SD_Text_TextType_SalesDoc_Change2_ID',
  'SD_Text_TextType_SalesDoc_Change2_ID_New',
  'SD_Text_TextType_Shipment_Change1_ID',
  'SD_Text_TextType_Shipment_Change1_ID_New',
  'SD_Text_TextType_Trading_Change1_ID',
  'SD_Text_TextType_Trading_Change1_ID_New',
  'SD_Text_TextType_Trading_Change2_ID',
  'SD_Text_TextType_Trading_Change2_ID_New',
  'SD_Text_TextType_Agency_Change1_Assgn',
  'SD_Text_TextType_Agency_Change2_Assgn',
  'SD_Text_TextType_billingDoc_Change1_Assgn',
  'SD_Text_TextType_billingDoc_Change2_Assgn',
  'SD_Text_TextType_Cust_Change1_Assgn',
  'SD_Text_TextType_Cust_Change2_Assgn',
  'SD_Text_TextType_Cust_Change3_Assgn',
  'SD_Text_TextType_Delivery_Change1_Assgn',
  'SD_Text_TextType_Delivery_Change2_Assgn',
  'SD_Text_TextType_Financial_Change1_Assgn',
  'SD_Text_TextType_Info_Change1_Assgn',
  'SD_Text_TextType_Legal_Change1_Assgn',
  'SD_Text_TextType_Pricing_Change1_Assgn',
  'SD_Text_TextType_Pricing_Change2_Assgn',
  'SD_Text_TextType_SalesAct_Change1_Assgn',
  'SD_Text_TextType_SalesDoc_Change1_Assgn',
  'SD_Text_TextType_SalesDoc_Change2_Assgn',
  'SD_Text_TextType_Shipment_Change1_Assgn',
  'SD_Text_TextType_Trading_Change1_Assgn',
  'SD_Text_TextType_Trading_Change2_Assgn',

  
  'SD_Text_TextType_Agency_Change1_Access',

  'SD_Text_TextType_Agency_Change1_Access_New',

  'SD_Text_TextType_Agency_Change2_Access',

  'SD_Text_TextType_Agency_Change2_Access_New',

  'SD_Text_TextType_billingDoc_Change1_Access',

  'SD_Text_TextType_billingDoc_Change1_Access_New',

  'SD_Text_TextType_billingDoc_Change2_Access',

  'SD_Text_TextType_billingDoc_Change2_Access_New',

  'SD_Text_TextType_Delivery_Change1_Access',

  'SD_Text_TextType_Delivery_Change1_Access_New',

  'SD_Text_TextType_Delivery_Change2_Access',

  'SD_Text_TextType_Delivery_Change2_Access_New',

  'SD_Text_TextType_SalesAct_Change1_Access',

  'SD_Text_TextType_SalesAct_Change1_Access_New',

  'SD_Text_TextType_SalesDoc_Change1_Access',

  'SD_Text_TextType_SalesDoc_Change1_Access_New',

  'SD_Text_TextType_SalesDoc_Change2_Access',

  'SD_Text_TextType_SalesDoc_Change2_Access_New',

  'SD_Text_TextType_Trading_Change1_Access',

  'SD_Text_TextType_Trading_Change1_Access_New',

  'SD_Text_TextType_Trading_Change2_Access',

  'SD_Text_TextType_Trading_Change2_Access_New',

  'SD_Text_TextType_Agency_Change1_AccessID',

  'SD_Text_TextType_Agency_Change1_AccessID_New',

  'SD_Text_TextType_Agency_Change2_AccessID',

  'SD_Text_TextType_Agency_Change2_AccessID_New',

  'SD_Text_TextType_billingDoc_Change1_AccessID',

  'SD_Text_TextType_billingDoc_Change1_AccessID_New',

  'SD_Text_TextType_billingDoc_Change2_AccessID',

  'SD_Text_TextType_billingDoc_Change2_AccessID_New',

  'SD_Text_TextType_Delivery_Change1_AccessID',

  'SD_Text_TextType_Delivery_Change1_AccessID_New',

  'SD_Text_TextType_Delivery_Change2_AccessID',

  'SD_Text_TextType_Delivery_Change2_AccessID_New',

  'SD_Text_TextType_SalesAct_Change1_AccessID',

  'SD_Text_TextType_SalesAct_Change1_AccessID_New',

  'SD_Text_TextType_SalesDoc_Change1_AccessID',

  'SD_Text_TextType_SalesDoc_Change1_AccessID_New',

  'SD_Text_TextType_SalesDoc_Change2_AccessID',

  'SD_Text_TextType_SalesDoc_Change2_AccessID_New',

  'SD_Text_TextType_Trading_Change1_AccessID',

  'SD_Text_TextType_Trading_Change1_AccessID_New',

  'SD_Text_TextType_Trading_Change2_AccessID',

  'SD_Text_TextType_Trading_Change2_AccessID_New',

  'SD_Text_TextType_Agency_TextType1',

  'SD_Text_TextType_Agency_TextType1_New',

  'SD_Text_TextType_Agency_TextType2',

  'SD_Text_TextType_Agency_TextType2_New',

  'SD_Text_TextType_billingDoc_TextType1',

  'SD_Text_TextType_billingDoc_TextType1_New',

  'SD_Text_TextType_billingDoc_TextType2',

  'SD_Text_TextType_billingDoc_TextType2_New',

  'SD_Text_TextType_Cust_TextType1',

  'SD_Text_TextType_Cust_TextType1_New',

  'SD_Text_TextType_Cust_TextType2',

  'SD_Text_TextType_Cust_TextType2_New',

  'SD_Text_TextType_Cust_TextType3',

  'SD_Text_TextType_Cust_TextType3_New',

  'SD_Text_TextType_Delivery_TextType1',

  'SD_Text_TextType_Delivery_TextType1_New',

  'SD_Text_TextType_Delivery_TextType2',

  'SD_Text_TextType_Delivery_TextType2_New',

  'SD_Text_TextType_Financial_TextType1',

  'SD_Text_TextType_Financial_TextType1_New',

  'SD_Text_TextType_Info_TextType1',

  'SD_Text_TextType_Info_TextType1_New',

  'SD_Text_TextType_Legal_TextType1',

  'SD_Text_TextType_Legal_TextType1_New',

  'SD_Text_TextType_Pricing_TextType1',

  'SD_Text_TextType_Pricing_TextType1_New',

  'SD_Text_TextType_Pricing_TextType2',

  'SD_Text_TextType_Pricing_TextType2_New',

  'SD_Text_TextType_SalesAct_TextType1',

  'SD_Text_TextType_SalesAct_TextType1_New',

  'SD_Text_TextType_SalesDoc_TextType1',

  'SD_Text_TextType_SalesDoc_TextType1_New',

  'SD_Text_TextType_SalesDoc_TextType2',

  'SD_Text_TextType_SalesDoc_TextType2_New',

  'SD_Text_TextType_Shipment_TextType1',

  'SD_Text_TextType_Shipment_TextType1_New',

  'SD_Text_TextType_Trading_TextType1',

  'SD_Text_TextType_Trading_TextType1_New',

  'SD_Text_TextType_Trading_TextType2',

  'SD_Text_TextType_Trading_TextType2_New',

  'SD_Text_TextType',

  'SD_Text_Access',

  'SD_DefineRoutes',

  'SD_DefineRoute_Transport',

  'SD_DefineRoute_Transport_New',

  'SD_DefineRoute_Shipping',

  'SD_DefineRoute_Shipping_New',

  'SD_DefineRoute_Connection',

  'SD_DefineRoute_Connection_New',

  'SD_DefineRoute_Stage',

  'SD_DefineRoute_Stage_New',

  'SD_RouteDet',

  'SD_RouteDet_Transport',

  'SD_RouteDet_Transport_New',

  'SD_RouteDet_Shipping',

  'SD_RouteDet_Transportation',

  'SD_RouteDet_Transportation_New',

  'SD_RouteDet_WeightGrp',

  'SD_RouteDet_Weightgrp_New',

  'SD_RouteDet_Weightgrp_Detail',

  'SD_RouteDet_Weightgrp_Detail_New',

  'SD_RouteDet_Determination',

  'SD_RouteDet_Determination_New',

  'SD_RouteDet_Determination_Order',

  'SD_RouteDet_Determination_Order_New',

  'SD_RouteDet_Determination_Delivery',

  'SD_RouteDet_Determination_Delivery_New',

  //Logistyics
  'Logistics_MaterialMaster',
  'Logistics_MM_Config_Sequence',
  'Logistics_MM_Config_AssignScreens',
  'Logistics_MM_Config_MaintainScreens',
  'Logistics_MM_Config_Transaction',
'Logistics_BusinessPartner',



'Logistics_BatchMngmnt',
'Logistics_BM_BatchLvl',
'Logistics_BM_StatusMngt',
'Logistics_BM_PlantMngt',

'Logistics_BM_FieldSelection',
'Logistics_BM_FieldSelection_NewEntry',
'Logistics_BM_ActivateDoc',

'Logistics_BM_NumberAssgn',
'Logistics_BM_AssignRange',
'Logistics_BM_InternalBatch',
'Logistics_BM_ExternalBatch',
'Logistics_BM_SetupCustomer',

'Logistics_BM_ProcessOrder',
'Logistics_BM_GoodsMov',
'Logistics_BM_Transaction',

'Logistics_BM_InventoryMng',
'Logistics_BM_Function',

'Logistics_BM_WarehouceMng',
'Logistics_BM_InitialStatus',

'Logistics_BM_CondnTable',
'Logistics_BM_AccessSequence',
'Logistics_BM_StrategyTypes',
'Logistics_BM_ProcedureDef',
'Logistics_BM_Activation',
'Logistics_BM_AutomaticDet',
'Logistics_BM_DefineSelection',
'Logistics_BM_Sort',
'Logistics_BM_AllocationNumRange',

'Logistics_BM_MakeSettings',

'Logistics_BM_ActivateUnit',
'Logistics_BM_EditUnit',
'Logistics_BM_Proportional',
'Logistics_BM_Conversion',

'Logistics_BM_PeriodIndicator',
'Logistics_BM_ExpDate',
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


