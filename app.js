import connect from './conn.js';
import express from "express";
import bodyparser from "body-parser";

const app = express();
app.listen(3300, () => {
  console.log("hurrah!!");
});

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.use(express.static('public'))
app.get("/AccessSequenceFields", (req, res) => {
  res.render('AccessSequenceFields')
})

app.get("/accountgrp", (req, res) => {
  res.render('accountgrp')
})

app.get("/assign-sales-dist-plant", (req, res) => {
  res.render('assign-sales-dist-plant')
})
app.get("/AssignBusinessArea", (req, res) => {
  res.render('AssignBusinessArea')
})
app.get("/assigncompanycode", (req, res) => {
  res.render('assigncompanycode')
})
app.get("/assigndistributionChannel", (req, res) => {
  res.render('assigndistributionChannel')
})
app.get("/assignDivision", (req, res) => {
  res.render('assignDivision')
})
app.get("/assignPlant", (req, res) => {
  res.render('assignPlant')
})
app.get("/assignPurchasingOrg", (req, res) => {
  res.render('assignPurchasingOrg')
})
app.get("/assignsalesgrp", (req, res) => {
  res.render('assignsalesgrp')
})
app.get("/assignPurchasingOffice", (req, res) => {
  res.render('assignPurchasingOffice')
})
app.get("/assignSalesOrganisation", (req, res) => {
  res.render('assignSalesOrganisation')
})
app.get("/assignSalesToCredit", (req, res) => {
  res.render('assignSalesToCredit')
})
app.get("/AssignShippingPoint", (req, res) => {
  res.render('AssignShippingPoint')
})
app.get("/AssignShippingPoint", (req, res) => {
  res.render('AssignShippingPoint')
})
app.get("/assignToCreditControl", (req, res) => {
  res.render('assignToCreditControl')
})
app.get("/assignbusinessareaBySales", (req, res) => {
  res.render('assignbusinessareaBySales')
})
app.get("/assignSalesOffice", (req, res) => {
  res.render('assignSalesOffice')
})


app.get("/business", (req, res) => {
  res.render('business')
})

app.get("/companyform", (req, res) => {
  res.render('companyform')
})
app.get("/Countrytable", (req, res) => {
  res.render('Countrytable')
})
app.get("/creditcontrolarea", (req, res) => {
  res.render('creditcontrolarea')
})
app.get("/Currencytable", (req, res) => {
  res.render('Currencytable')
})
app.get("/distribuation", (req, res) => {
  res.render('distribuation')
})
app.get("/distributionChannel", (req, res) => {
  res.render('distributionChannel')
})
app.get("/division", (req, res) => {
  res.render('division')
})
app.get("/functionalarea", (req, res) => {
  res.render('functionalarea')
})
app.get("/Languagetable", (req, res) => {
  res.render('Languagetable')
})
app.get("/loadintpy", (req, res) => {
  res.render('loadintpy')
})
app.get("/login", (req, res) => {
  res.render('login')
})
app.get("/numrange", (req, res) => {
  res.render('numrange')
})
app.get("/plant", (req, res) => {
  res.render('plant')
})
app.get("/profitcenter", (req, res) => {
  res.render('profitcenter')
})
app.get("/purchasingOrgToPlant", (req, res) => {
  res.render('purchasingOrgToPlant')
})
app.get("/purrchaceorg", (req, res) => {
  res.render('purrchaceorg')
})
app.get("/refrencePurchasingOrg", (req, res) => {
  res.render('refrencePurchasingOrg')
})
app.get("/ruleBySalesArea", (req, res) => {
  res.render('ruleBySalesArea')
})
app.get("/sales", (req, res) => {
  res.render('sales')
})
app.get("/salesgrp", (req, res) => {
  res.render('salesgrp')
})
app.get("/salesoffice", (req, res) => {
  res.render('salesoffice')
})
app.get("/salesorganization", (req, res) => {
  res.render('salesorganization')
})
app.get("/setupSalesArea", (req, res) => {
  res.render('setupSalesArea')
})
app.get("/shippingpoint", (req, res) => {
  res.render('shippingpoint')
})
app.get("/StandardpurchasingOrg", (req, res) => {
  res.render('StandardpurchasingOrg')
})
app.get("/Statetable", (req, res) => {
  res.render('Statetable')
})
app.get("/storageloc", (req, res) => {
  res.render('storageloc')
})

app.get("/Unittable", (req, res) => {
  res.render('Unittable')
})







app.get('/home',(req,res)=>{
    res.render('Home')
})
app.get("/creditcontrolarea", (req, res) => {
    res.render('creditcontrolarea')
})
app.get("/companycode", (req, res) => {
  res.render('companycode')
})


app.get("/Countrytable", (req, res) => {
  res.render('Countrytable')
})
app.get("/accessSequence", (req, res) => {
  res.render('accessSequence')
})
app.get("/AccessSequence_NewEntry", (req, res) => {
  res.render('AccessSequence_NewEntry')
})
app.get("/AccessTable", (req, res) => {
  res.render('AccessTable')
})
app.get("/AccessTable_NewEntry", (req, res) => {
  res.render('AccessTable_NewEntry')
})
app.get("/AccessFields", (req, res) => {
  res.render('AccessFields')
})
app.get("/ConditionTypes", (req, res) => {
  res.render('ConditionTypes')
})

app.get("/Condition", (req, res) => {
  res.render('Condition')
})
app.get("/ConditionTable", (req, res) => {
  res.render('ConditionTable')
})


app.get("/DefAssPricingprocedure", (req, res) => {
  res.render('DefAssPricingprocedure')
})

app.get("/ActivityMaintainPricing", (req, res) => {
  res.render('ActivityMaintainPricing')
})

app.get("/ActivityDocumentPricing", (req, res) => {
  res.render('ActivityDocumentPricing')
})

app.get("/ActivityDetermination", (req, res) => {
  res.render('ActivityDetermination')
})

app.get("/ActivityDefineDocument", (req, res) => {
  res.render('ActivityDefineDocument')
})

app.get("/ActivityDefineCustomer", (req, res) => {
  res.render('ActivityDefineCustomer')
})

app.get("/ActivityAssignDocument", (req, res) => {
  res.render('ActivityAssignDocument')
})

app.get("/Activity", (req, res) => {
  res.render('Activity')
})

app.get("/Activity", (req, res) => {
  res.render('Activity')
})

app.get("/ControldataTable", (req, res) => {
  res.render('ControldataTable')
})
app.get("/ControldataTable_NewEntry", (req, res) => {
  res.render('ControldataTable_NewEntry')
})

app.get("/MaintainPricingNewEntry", (req, res) => {
  res.render('MaintainPricingNewEntry')
})

app.get("/DefineCustomerNewEntry", (req, res) => {
  res.render('DefineCustomerNewEntry')
})
app.get("/DefineDocumentNewEntry", (req, res) => {
  res.render('DefineDocumentNewEntry')
})
app.get("/DeterminationNewEntry", (req, res) => {
  res.render('DeterminationNewEntry')
})

app.get("/SalesDocumentHeader1", (req, res) => {
  res.render('SalesDocumentHeader1')
})

app.get("/SalesDocumentHeader1NewEntry", (req, res) => {
  res.render('SalesDocumentHeader1NewEntry')
})



app.get("/SalesDocumentHeader2", (req, res) => {
  res.render('SalesDocumentHeader2')
})

app.get("/SalesDocumentHeader2NewEntry", (req, res) => {
  res.render('SalesDocumentHeader2NewEntry')
})


app.get("/SalesDocumentHeader3", (req, res) => {
  res.render('SalesDocumentHeader3')
})
app.get("/SalesDocumentHeader3NewEntry", (req, res) => {
  res.render('SalesDocumentHeader3NewEntry')
})
app.get("/salesdocumentheader3_CSO", (req, res) => {
  res.render('salesdocumentheader3_CSO')
})
app.get("/salesdocumentheader3_CDC", (req, res) => {
  res.render('salesdocumentheader3_CDC')
})
app.get("/salesdocumentheader3_CD", (req, res) => {
  res.render('salesdocumentheader3_CD')
})
app.get("/salesdocumentheader3_ASOTPFSA", (req, res) => {
  res.render('salesdocumentheader3_ASOTPFSA')
})

app.get("/salesdocumentheader3_ASOTPFSA_NewEntry", (req, res) => {
  res.render('salesdocumentheader3_ASOTPFSA_NewEntry')
})

// item category
app.get("/saleDocumentItem_category", (req, res) => {
  res.render('saleDocumentItem_category')
})
app.get("/saleDocumentItem_category_NewEntry", (req, res) => {
  res.render('saleDocumentItem_category_NewEntry')
})


app.get("/saleDocumentItem_categoryGroups", (req, res) => {
  res.render('saleDocumentItem_categoryGroups')
})
app.get("/saleDocumentItem_categoryGroups_NewEntry", (req, res) => {
  res.render('saleDocumentItem_categoryGroups_NewEntry')
})


app.get("/saleDocumentItem_categoryUsage", (req, res) => {
  res.render('saleDocumentItem_categoryUsage')
})
app.get("/saleDocumentItem_categoryUsage_NewEntry", (req, res) => {
  res.render('saleDocumentItem_categoryUsage_NewEntry')
})


app.get("/saleDocumentItem_AssignCategory", (req, res) => {
  res.render('saleDocumentItem_AssignCategory')
})
app.get("/saleDocumentItem_AssignCategory_NewEntry", (req, res) => {
  res.render('saleDocumentItem_AssignCategory_NewEntry')
})



// Purchasing

app.get("/Purchasing_NumberRange", (req, res) => {
  res.render('Purchasing_NumberRange')
})

app.get("/Purchasing_DocumentTypes", (req, res) => {
  res.render('Purchasing_DocumentTypes')
})

app.get("/Purchasing_Charateristics", (req, res) => {
  res.render('Purchasing_Charateristics')
})


app.get("/Purchasing_Classes", (req, res) => {
  res.render('Purchasing_Classes')
})

app.get("/Sales_District", (req, res) => {
  res.render('Sales_District')
})

app.get("/SalesDistrictNewEntry", (req, res) => {
  res.render('SalesDistrictNewEntry')
})
app.get("/Customer_Group", (req, res) => {
  res.render('Customer_Group')
})
app.get("/Customer_GroupNewEntry", (req, res) => {
  res.render('Customer_GroupNewEntry')
})


app.get("/PartnerDetermination", (req, res) => {
  res.render('PartnerDetermination')
})

app.get("/PartFuncProcedure", (req, res) => {
  res.render('PartFuncProcedure')
})

app.get("/PartDetmProcedureAssgn", (req, res) => {
  res.render('PartDetmProcedureAssgn')
})

app.get("/PartGrpFuncAssn", (req, res) => {
  res.render('PartGrpFuncAssn')
})

app.get("/Price_Group", (req, res) => {
  res.render('Price_Group')
})

app.get("/Price_GroupNewEntry", (req, res) => {
  res.render('Price_GroupNewEntry')
})

app.get("/Price_List", (req, res) => {
  res.render('Price_List')
})

app.get("/Price_ListNewEntry", (req, res) => {
  res.render('Price_ListNewEntry')
})

app.get("/Delivery_Priorities", (req, res) => {
  res.render('Delivery_Priorities')
})

app.get("/Delivery_PrioritiesNewEntry", (req, res) => {
  res.render('Delivery_PrioritiesNewEntry')
})
app.get("/Shipping_Condition", (req, res) => {
  res.render('Shipping_Condition')
})

app.get("/Shipping_ConditionNewEntry", (req, res) => {
  res.render('Shipping_ConditionNewEntry')
})

app.get("/Account_assignmentGrp", (req, res) => {
  res.render('Account_assignmentGrp')
})

app.get("/Account_assignmentGrpNewEntry", (req, res) => {
  res.render('Account_assignmentGrpNewEntry')
})

app.get("/Inco_Terms", (req, res) => {
  res.render('Inco_Terms')
})

app.get("/Inco_TermsNewEntry", (req, res) => {
  res.render('Inco_TermsNewEntry')
})

app.get("/accountgrp_SalesData", (req, res) => {
  res.render('accountgrp_SalesData')
})
app.get("/accountgrp_GeneralData", (req, res) => {
  res.render('accountgrp_GeneralData')
})
app.get("/accountgrp_CC", (req, res) => {
  res.render('accountgrp_CC')
})

// purchaseinfo
app.get("/PurchaseInfo_ScLayout", (req, res) => {
  res.render('PurchaseInfo_ScLayout')
})

app.get("/PurchaseInfo_ScLayout_ME11", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11')
})
app.get("/PurchaseInfo_ScLayout_ME12", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12')
})
app.get("/PurchaseInfo_ScLayout_ME13", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13')
})
app.get("/PurchaseInfo_ScLayout_ME15", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15')
})

// ME11

app.get("/PurchaseInfo_ScLayout_ME11_GR", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_GR')
})
app.get("/PurchaseInfo_ScLayout_ME11_Basic", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_Basic')
})
app.get("/PurchaseInfo_ScLayout_ME11_Ref", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_Ref')
})
app.get("/PurchaseInfo_ScLayout_ME11_Adm", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_Adm')
})
app.get("/PurchaseInfo_ScLayout_ME11_Qnt", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_Qnt')
})
app.get("/PurchaseInfo_ScLayout_ME11_Cond", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_Cond')
})
app.get("/PurchaseInfo_ScLayout_ME11_Del", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_Del')
})

app.get("/PurchaseInfo_ScLayout_ME11_Texts", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME11_Texts')
})


// ME12

app.get("/PurchaseInfo_ScLayout_ME12_GR", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_GR')
})
app.get("/PurchaseInfo_ScLayout_ME12_Basic", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_Basic')
})
app.get("/PurchaseInfo_ScLayout_ME12_Ref", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_Ref')
})
app.get("/PurchaseInfo_ScLayout_ME12_Adm", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_Adm')
})
app.get("/PurchaseInfo_ScLayout_ME12_Qnt", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_Qnt')
})
app.get("/PurchaseInfo_ScLayout_ME12_Cond", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_Cond')
})
app.get("/PurchaseInfo_ScLayout_ME12_Del", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_Del')
})

app.get("/PurchaseInfo_ScLayout_ME12_Texts", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME12_Texts')
})

// ME13

app.get("/PurchaseInfo_ScLayout_ME13_GR", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_GR')
})
app.get("/PurchaseInfo_ScLayout_ME13_Basic", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_Basic')
})
app.get("/PurchaseInfo_ScLayout_ME13_Ref", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_Ref')
})
app.get("/PurchaseInfo_ScLayout_ME13_Adm", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_Adm')
})
app.get("/PurchaseInfo_ScLayout_ME13_Qnt", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_Qnt')
})
app.get("/PurchaseInfo_ScLayout_ME13_Cond", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_Cond')
})
app.get("/PurchaseInfo_ScLayout_ME13_Del", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_Del')
})

app.get("/PurchaseInfo_ScLayout_ME13_Texts", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME13_Texts')
})


// ME15

app.get("/PurchaseInfo_ScLayout_ME15_GR", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_GR')
})
app.get("/PurchaseInfo_ScLayout_ME15_Basic", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_Basic')
})
app.get("/PurchaseInfo_ScLayout_ME15_Ref", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_Ref')
})
app.get("/PurchaseInfo_ScLayout_ME15_Adm", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_Adm')
})
app.get("/PurchaseInfo_ScLayout_ME15_Qnt", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_Qnt')
})
app.get("/PurchaseInfo_ScLayout_ME15_Cond", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_Cond')
})
app.get("/PurchaseInfo_ScLayout_ME15_Del", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_Del')
})

app.get("/PurchaseInfo_ScLayout_ME15_Texts", (req, res) => {
  res.render('PurchaseInfo_ScLayout_ME15_Texts')
})



// sourcelist

app.get("/Purchasing_Sourcelist", (req, res) => {
  res.render('Purchasing_Sourcelist')
})

app.get("/PurchaseInfo_ScreenLayout", (req, res) => {
  res.render('PurchaseInfo_ScreenLayout')
})
app.get("/PurchaseInfo_NumberRange", (req, res) => {
  res.render('PurchaseInfo_NumberRange')
})

//Quota Arrangment
app.get("/Purchasing_Quota_NumRange", (req, res) => {
  res.render('Purchasing_Quota_NumRange')
})
app.get("/Purchasing_Quota_Define", (req, res) => {
  res.render('Purchasing_Quota_Define')
})
app.get("/Purchasing_Quota_DefineNewEntry", (req, res) => {
  res.render('Purchasing_Quota_DefineNewEntry')
})


// RFQ
app.get("/Purchasing_RFQ_NumRange", (req, res) => {
  res.render('Purchasing_RFQ_NumRange')
})
app.get("/Purchasing_RFQ_ScLayout", (req, res) => {
  res.render('Purchasing_RFQ_ScLayout')
})

app.get("/Purchasing_RFQ_ScLayoutNewEntry", (req, res) => {
  res.render('Purchasing_RFQ_ScLayoutNewEntry')
})

app.get("/Purchasing_RFQ_ScLayout_FieldSelection", (req, res) => {
  res.render('Purchasing_RFQ_ScLayout_FieldSelection')
})

// Field Selection - RFQ
app.get("/Purchasing_RFQ_BasicData", (req, res) => {
  res.render('Purchasing_RFQ_BasicData')
})
app.get("/Purchasing_RFQ_Terms", (req, res) => {
  res.render('Purchasing_RFQ_Terms')
})
app.get("/Purchasing_RFQ_RefHeader", (req, res) => {
  res.render('Purchasing_RFQ_RefHeader')
})
app.get("/Purchasing_RFQ_AdmHeader", (req, res) => {
  res.render('Purchasing_RFQ_AdmHeader')
})
app.get("/Purchasing_RFQ_SuplyingPlant", (req, res) => {
  res.render('Purchasing_RFQ_SuplyingPlant')
})
app.get("/Purchasing_RFQ_Q&P", (req, res) => {
  res.render('Purchasing_RFQ_Q&P')
})
app.get("/Purchasing_RFQ_DeadlineMonitoring", (req, res) => {
  res.render('Purchasing_RFQ_DeadlineMonitoring')
})
app.get("/Purchasing_RFQ_GR_IR", (req, res) => {
  res.render('Purchasing_RFQ_GR_IR')
})
app.get("/Purchasing_RFQ_RefItem", (req, res) => {
  res.render('Purchasing_RFQ_RefItem')
})
app.get("/Purchasing_RFQ_AdmItem", (req, res) => {
  res.render('Purchasing_RFQ_AdmItem')
})
app.get("/Purchasing_RFQ_ScControl", (req, res) => {
  res.render('Purchasing_RFQ_ScControl')
})
app.get("/Purchasing_RFQ_AdmData", (req, res) => {
  res.render('Purchasing_RFQ_AdmData')
})
app.get("/Purchasing_RFQ_DelMonitoring", (req, res) => {
  res.render('Purchasing_RFQ_DelMonitoring')
})
app.get("/Purchasing_RFQ_Enjoy", (req, res) => {
  res.render('Purchasing_RFQ_Enjoy')
})





app.get("/Purchasing_RFQ_Rel", (req, res) => {
  res.render('Purchasing_RFQ_Rel')
})
app.get("/Purchasing_RFQ_Doc", (req, res) => {
  res.render('Purchasing_RFQ_Doc')
})

// acc grp gen data
app.get("/account_Gen_Add", (req, res) => {
  res.render('account_Gen_Add')
})

app.get("/account_Gen_Comm", (req, res) => {
  res.render('account_Gen_Comm')
})

app.get("/account_Gen_Cont", (req, res) => {
  res.render('account_Gen_Cont')
})

app.get("/account_Gen_Marketing", (req, res) => {
  res.render('account_Gen_Marketing')
})

app.get("/aaccount_Gen_Pay", (req, res) => {
  res.render('aaccount_Gen_Pay')
})

app.get("/account_Gen_Unloading", (req, res) => {
  res.render('account_Gen_Unloading')
})

app.get("/account_Gen_Contact", (req, res) => {
  res.render('account_Gen_Contact')
})

app.get("/account_Gen_Foreign", (req, res) => {
  res.render('account_Gen_Foreign')
})

// acc grp company code
app.get("/account_CC_AccMng", (req, res) => {
  res.render('account_CC_AccMng')
})

app.get("/account_Cc_Pay", (req, res) => {
  res.render('account_Cc_Pay')
})

app.get("/account_Cc_Corr", (req, res) => {
  res.render('account_Cc_Corr')
})

app.get("/account_Cc_Insurence", (req, res) => {
  res.render('account_Cc_Insurence')
})

app.get("/account_Cc_WH", (req, res) => {
  res.render('account_Cc_WH')
})


// acc grp sales


app.get("/account_Sales_Sales", (req, res) => {
  res.render('account_Sales_Sales')
})
app.get("/account_Sales_Shipping", (req, res) => {
  res.render('account_Sales_Shipping')
})
app.get("/account_Sales_Billing", (req, res) => {
  res.render('account_Sales_Billing')
})
app.get("/account_Sales_Partner", (req, res) => {
  res.render('account_Sales_Partner')
})
app.get("/account_Sales_Documents", (req, res) => {
  res.render('account_Sales_Documents')
})




app.get("/VendorAccountGroup", (req, res) => {
  res.render('VendorAccountGroup')
})

app.get("/VendorDefineScreen", (req, res) => {
  res.render('VendorDefineScreen')
})

app.get("/VendorDefineTransaction", (req, res) => {
  res.render('VendorDefineTransaction')
})

app.get("/VendorDefineNumRange", (req, res) => {
  res.render('VendorDefineNumRange')
})

app.get("/VendorAccountGroupForm", (req, res) => {
  res.render('VendorAccountGroupForm')
})
app.get("/VendordefineScreenNewEntry", (req, res) => {
  res.render('VendordefineScreenNewEntry')
})
app.get("/VendordefineScreen", (req, res) => {
  res.render('VendordefineScreen')
})

app.get("/Vendor_PurchData", (req, res) => {
  res.render('Vendor_PurchData')
})
app.get("/Vendor_PurchPlant", (req, res) => {
  res.render('Vendor_PurchPlant')
})
app.get("/Vendor_PurchRange", (req, res) => {
  res.render('Vendor_PurchRange')
})



app.get("/Vendor_PurchData2", (req, res) => {
  res.render('Vendor_PurchData2')
})
app.get("/Vendor_PartnerUsage", (req, res) => {
  res.render('Vendor_PartnerUsage')
})
app.get("/Vendor_Add-PurchData", (req, res) => {
  res.render('Vendor_Add-PurchData')
})

app.get("/VendorSubRange_Add-PurchData", (req, res) => {
  res.render('VendorSubRange_Add-PurchData')
})
app.get("/VendorSubRange_PartnerUsage", (req, res) => {
  res.render('VendorSubRange_PartnerUsage')
})

app.get("/Vendor_PlantUsage", (req, res) => {
  res.render('Vendor_PlantUsage')
})
app.get("/Vendor_PlantLevel", (req, res) => {
  res.render('Vendor_PlantLevel')
})






app.get("/Vendor_Display_Accounting", (req, res) => {
  res.render('Vendor_Display_Accounting')
})

app.get("/Vendor_Display_Purchasing", (req, res) => {
  res.render('Vendor_Display_Purchasing')
})

app.get("/Vendor_Display_Centrally", (req, res) => {
  res.render('Vendor_Display_Centrally')
})

app.get("/Vendor_Change_Accounting", (req, res) => {
  res.render('Vendor_Change_Accounting')
})

app.get("/Vendor_Change_Purchasing", (req, res) => {
  res.render('Vendor_Change_Purchasing')
})

app.get("/Vendor_Change_Centrally", (req, res) => {
  res.render('Vendor_Change_Centrally')
})

app.get("/Vendor_Create_Accounting", (req, res) => {
  res.render('Vendor_Create_Accounting')
})

app.get("/Vendor_Create_Purchasing", (req, res) => {
  res.render('Vendor_Create_Purchasing')
})

app.get("/Vendor_Create_Centrally", (req, res) => {
  res.render('Vendor_Create_Centrally')
})


app.get("/Vendor_Create_Gen", (req, res) => {
  res.render('Vendor_Create_Gen')
})

app.get("/Vendor_Create_CompCode", (req, res) => {
  res.render('Vendor_Create_CompCode')
})

app.get("/Vendor_Change_Gen", (req, res) => {
  res.render('Vendor_Change_Gen')
})

app.get("/Vendor_Change_CompCode", (req, res) => {
  res.render('Vendor_Change_CompCode')
})

app.get("/Vendor_Display_Gen", (req, res) => {
  res.render('Vendor_Display_Gen')
})

app.get("/Vendor_Display_CompCode", (req, res) => {
  res.render('Vendor_Display_CompCode')
})

app.get("/Vendor_Create_Purchasing_Gen", (req, res) => {
  res.render('Vendor_Create_Purchasing_Gen')
})
app.get("/Vendor_Create_Purchasing_Purch", (req, res) => {
  res.render('Vendor_Create_Purchasing_Purch')
})
app.get("/Vendor_Create_Purchasing_VSR", (req, res) => {
  res.render('Vendor_Create_Purchasing_VSR')
})
app.get("/Vendor_Create_Purchasing_Plant", (req, res) => {
  res.render('Vendor_Create_Purchasing_Plant')
})

app.get("/Vendor_Change_Purchasing_Gen", (req, res) => {
  res.render('Vendor_Change_Purchasing_Gen')
})
app.get("/Vendor_Change_Purchasing_Purch", (req, res) => {
  res.render('Vendor_Change_Purchasing_Purch')
})
app.get("/Vendor_Change_Purchasing_VSR", (req, res) => {
  res.render('Vendor_Change_Purchasing_VSR')
})
app.get("/Vendor_Change_Purchasing_Plant", (req, res) => {
  res.render('Vendor_Change_Purchasing_Plant')
})

app.get("/Vendor_Display_Purchasing_Gen", (req, res) => {
  res.render('Vendor_Display_Purchasing_Gen')
})
app.get("/Vendor_Display_Purchasing_Purch", (req, res) => {
  res.render('Vendor_Display_Purchasing_Purch')
})
app.get("/Vendor_Display_Purchasing_VSR", (req, res) => {
  res.render('Vendor_Display_Purchasing_VSR')
})
app.get("/Vendor_Display_Purchasing_Plant", (req, res) => {
  res.render('Vendor_Display_Purchasing_Plant')
})



app.get("/Vendor_Create_Centrally_Cc", (req, res) => {
  res.render('Vendor_Create_Centrally_Cc')
})
app.get("/Vendor_Create_Centrally_Purch", (req, res) => {
  res.render('Vendor_Create_Centrally_Purch')
})
app.get("/Vendor_Create_Centrally_VSR", (req, res) => {
  res.render('Vendor_Create_Centrally_VSR')
})
app.get("/Vendor_Create_Centrally_Plant", (req, res) => {
  res.render('Vendor_Create_Centrally_Plant')
})
app.get("/Vendor_Create_Centrally_Gen", (req, res) => {
  res.render('Vendor_Create_Centrally_Gen')
})
app.get("/Vendor_Change_Centrally_Cc", (req, res) => {
  res.render('Vendor_Change_Centrally_Cc')
})
app.get("/Vendor_Change_Centrally_Purch", (req, res) => {
  res.render('Vendor_Change_Centrally_Purch')
})
app.get("/Vendor_Change_Centrally_VSR", (req, res) => {
  res.render('Vendor_Change_Centrally_VSR')
})
app.get("/Vendor_Change_Centrally_Plant", (req, res) => {
  res.render('Vendor_Change_Centrally_Plant')
})
app.get("/Vendor_Change_Centrally_Gen", (req, res) => {
  res.render('Vendor_Change_Centrally_Gen')
})


app.get("/Vendor_Display_Centrally_Cc", (req, res) => {
  res.render('Vendor_Display_Centrally_Cc')
})
app.get("/Vendor_Display_Centrally_Purch", (req, res) => {
  res.render('Vendor_Display_Centrally_Purch')
})
app.get("/Vendor_Display_Centrally_VSR", (req, res) => {
  res.render('Vendor_Display_Centrally_VSR')
})
app.get("/Vendor_Display_Centrally_Plant", (req, res) => {
  res.render('Vendor_Display_Centrally_Plant')
})
app.get("/Vendor_Display_Centrally_Gen", (req, res) => {
  res.render('Vendor_Display_Centrally_Gen')
})



// Accounting Change
app.get("/Vendor_Change_Gen_Add", (req, res) => {
  res.render('Vendor_Change_Gen_Add')
})
app.get("/Vendor_Change_Gen_Cont", (req, res) => {
  res.render('Vendor_Change_Gen_Cont')
})
app.get("/Vendor_Change_Gen_Contact", (req, res) => {
  res.render('Vendor_Change_Gen_Contact')
})
app.get("/Vendor_Change_Gen_Pay", (req, res) => {
  res.render('Vendor_Change_Gen_Pay')
})
app.get("/Vendor_Change_Gen_Comm", (req, res) => {
  res.render('Vendor_Change_Gen_Comm')
})

//compcode
app.get("/Vendor_Change_CompCode_Acc", (req, res) => {
  res.render('Vendor_Change_CompCode_Acc')
})
app.get("/Vendor_Change_CompCode_Corr", (req, res) => {
  res.render('Vendor_Change_CompCode_Corr')
})
app.get("/Vendor_Change_CompCode_Pay", (req, res) => {
  res.render('Vendor_Change_CompCode_Pay')
})
app.get("/Vendor_Change_CompCode_WH", (req, res) => {
  res.render('Vendor_Change_CompCode_WH')
})

// create
app.get("/Vendor_Create_Gen_Add", (req, res) => {
  res.render('Vendor_Create_Gen_Add')
})
app.get("/Vendor_Create_Gen_Cont", (req, res) => {
  res.render('Vendor_Create_Gen_Cont')
})
app.get("/Vendor_Create_Gen_Contact", (req, res) => {
  res.render('Vendor_Create_Gen_Contact')
})
app.get("/Vendor_Create_Gen_Pay", (req, res) => {
  res.render('Vendor_Create_Gen_Pay')
})
app.get("/Vendor_Create_Gen_Comm", (req, res) => {
  res.render('Vendor_Create_Gen_Comm')
})
//compcode
app.get("/Vendor_Create_CompCode_Acc", (req, res) => {
  res.render('Vendor_Create_CompCode_Acc')
})
app.get("/Vendor_Create_CompCode_Corr", (req, res) => {
  res.render('Vendor_Create_CompCode_Corr')
})
app.get("/Vendor_Create_CompCode_Pay", (req, res) => {
  res.render('Vendor_Create_CompCode_Pay')
})
app.get("/Vendor_Create_CompCode_WH", (req, res) => {
  res.render('Vendor_Create_CompCode_WH')
})



// display
app.get("/Vendor_Display_Gen_Add", (req, res) => {
  res.render('Vendor_Display_Gen_Add')
})
app.get("/Vendor_Display_Gen_Cont", (req, res) => {
  res.render('Vendor_Display_Gen_Cont')
})
app.get("/Vendor_Display_Gen_Contact", (req, res) => {
  res.render('Vendor_Display_Gen_Contact')
})
app.get("/Vendor_Display_Gen_Pay", (req, res) => {
  res.render('Vendor_Display_Gen_Pay')
})
app.get("/Vendor_Display_Gen_Comm", (req, res) => {
  res.render('Vendor_Display_Gen_Comm')
})
app.get("/Vendor_Display_CompCode_Acc", (req, res) => {
  res.render('Vendor_Display_CompCode_Acc')
})
app.get("/Vendor_Display_CompCode_Corr", (req, res) => {
  res.render('Vendor_Display_CompCode_Corr')
})
app.get("/Vendor_Display_CompCode_Pay", (req, res) => {
  res.render('Vendor_Display_CompCode_Pay')
})
app.get("/Vendor_Display_CompCode_WH", (req, res) => {
  res.render('Vendor_Display_CompCode_WH')
})



// Purchasing

// Change
app.get("/Vendor_Change_Purch_Gen_Add", (req, res) => {
  res.render('Vendor_Change_Purch_Gen_Add')
})
app.get("/Vendor_Change_Purch_Gen_Cont", (req, res) => {
  res.render('Vendor_Change_Purch_Gen_Cont')
})
app.get("/Vendor_Change_Purch_Gen_Contact", (req, res) => {
  res.render('Vendor_Change_Purch_Gen_Contact')
})
app.get("/Vendor_Change_Purch_Gen_Pay", (req, res) => {
  res.render('Vendor_Change_Purch_Gen_Pay')
})
app.get("/Vendor_Change_Purch_Gen_Comm", (req, res) => {
  res.render('Vendor_Change_Purch_Gen_Comm')
})



app.get("/Vendor_Change_Purch_ADDPurch", (req, res) => {
  res.render('Vendor_Change_Purch_ADDPurch')
})
app.get("/Vendor_Change_Purch_Partner", (req, res) => {
  res.render('Vendor_Change_Purch_Partner')
})
app.get("/Vendor_Change_Purch_PurchData", (req, res) => {
  res.render('Vendor_Change_Purch_PurchData')
})



app.get("/Vendor_Change_Purch_VSR_SUBPartner", (req, res) => {
  res.render('Vendor_Change_Purch_VSR_SUBPartner')
})
app.get("/Vendor_Change_Purch_VSR_SUBPurch", (req, res) => {
  res.render('Vendor_Change_Purch_VSR_SUBPurch')
})



app.get("/Vendor_Change_Purch_Plant_PurchData", (req, res) => {
  res.render('Vendor_Change_Purch_Plant_PurchData')
})
app.get("/Vendor_Change_Purch_Plant_PlantLvl", (req, res) => {
  res.render('Vendor_Change_Purch_Plant_PlantLvl')
})


// Create
app.get("/Vendor_Create_Purch_Gen_Add", (req, res) => {
  res.render('Vendor_Create_Purch_Gen_Add')
})
app.get("/Vendor_Create_Purch_Gen_Cont", (req, res) => {
  res.render('Vendor_Create_Purch_Gen_Cont')
})
app.get("/Vendor_Create_Purch_Gen_Contact", (req, res) => {
  res.render('Vendor_Create_Purch_Gen_Contact')
})
app.get("/Vendor_Create_Purch_Gen_Pay", (req, res) => {
  res.render('Vendor_Create_Purch_Gen_Pay')
})
app.get("/Vendor_Create_Purch_Gen_Comm", (req, res) => {
  res.render('Vendor_Create_Purch_Gen_Comm')
})



app.get("/Vendor_Create_Purch_ADDPurch", (req, res) => {
  res.render('Vendor_Create_Purch_ADDPurch')
})
app.get("/Vendor_Create_Purch_Partner", (req, res) => {
  res.render('Vendor_Create_Purch_Partner')
})
app.get("/Vendor_Create_Purch_PurchData", (req, res) => {
  res.render('Vendor_Create_Purch_PurchData')
})



app.get("/Vendor_Create_Purch_VSR_SUBPartner", (req, res) => {
  res.render('Vendor_Create_Purch_VSR_SUBPartner')
})
app.get("/Vendor_Create_Purch_VSR_SUBPurch", (req, res) => {
  res.render('Vendor_Create_Purch_VSR_SUBPurch')
})



app.get("/Vendor_Create_Purch_Plant_PurchData", (req, res) => {
  res.render('Vendor_Create_Purch_Plant_PurchData')
})
app.get("/Vendor_Create_Purch_Plant_PlantLvl", (req, res) => {
  res.render('Vendor_Create_Purch_Plant_PlantLvl')
})


// Display
app.get("/Vendor_Display_Purch_Gen_Add", (req, res) => {
  res.render('Vendor_Display_Purch_Gen_Add')
})
app.get("/Vendor_Display_Purch_Gen_Cont", (req, res) => {
  res.render('Vendor_Display_Purch_Gen_Cont')
})
app.get("/Vendor_Display_Purch_Gen_Contact", (req, res) => {
  res.render('Vendor_Display_Purch_Gen_Contact')
})
app.get("/Vendor_Display_Purch_Gen_Pay", (req, res) => {
  res.render('Vendor_Display_Purch_Gen_Pay')
})
app.get("/Vendor_Display_Purch_Gen_Comm", (req, res) => {
  res.render('Vendor_Display_Purch_Gen_Comm')
})



app.get("/Vendor_Display_Purch_ADDPurch", (req, res) => {
  res.render('Vendor_Display_Purch_ADDPurch')
})
app.get("/Vendor_Display_Purch_Partner", (req, res) => {
  res.render('Vendor_Display_Purch_Partner')
})
app.get("/Vendor_Display_Purch_PurchData", (req, res) => {
  res.render('Vendor_Display_Purch_PurchData')
})



app.get("/Vendor_Display_Purch_VSR_SUBPartner", (req, res) => {
  res.render('Vendor_Display_Purch_VSR_SUBPartner')
})
app.get("/Vendor_Display_Purch_VSR_SUBPurch", (req, res) => {
  res.render('Vendor_Display_Purch_VSR_SUBPurch')
})



app.get("/Vendor_Display_Purch_Plant_PurchData", (req, res) => {
  res.render('Vendor_Display_Purch_Plant_PurchData')
})
app.get("/Vendor_Display_Purch_Plant_PlantLvl", (req, res) => {
  res.render('Vendor_Display_Purch_Plant_PlantLvl')
})






//Centrally
// General

app.get("/Vendor_Create_Centrally_Gen_Add", (req, res) => {
  res.render('Vendor_Create_Centrally_Gen_Add')
})

app.get("/Vendor_Create_Centrally_Gen_Comm", (req, res) => {
  res.render('Vendor_Create_Centrally_Gen_Comm')
})

app.get("/Vendor_Create_Centrally_Gen_cont", (req, res) => {
  res.render('Vendor_Create_Centrally_Gen_cont')
})

app.get("/Vendor_Create_Centrally_Gen_Pay", (req, res) => {
  res.render('Vendor_Create_Centrally_Gen_Pay')
})

app.get("/Vendor_Create_Centrally_Gen_Contact", (req, res) => {
  res.render('Vendor_Create_Centrally_Gen_Contact')
})

// Compay Code
app.get("/Vendor_Create_Centrally_Cc_Acc", (req, res) => {
  res.render('Vendor_Create_Centrally_Cc_Acc')
})
app.get("/Vendor_Create_Centrally_Cc_Corr", (req, res) => {
  res.render('Vendor_Create_Centrally_Cc_Corr')
})
app.get("/Vendor_Create_Centrally_Cc_Pay", (req, res) => {
  res.render('Vendor_Create_Centrally_Cc_Pay')
})
app.get("/Vendor_Create_Centrally_Cc_WH", (req, res) => {
  res.render('Vendor_Create_Centrally_Cc_WH')
})
//Purchasing data


app.get("/Vendor_Create_Centrally_PurchData", (req, res) => {
  res.render('Vendor_Create_Centrally_PurchData')
})
app.get("/Vendor_Create_Centrally_Partner", (req, res) => {
  res.render('Vendor_Create_Centrally_Partner')
})
app.get("/Vendor_Create_Centrally_ADDPurch", (req, res) => {
  res.render('Vendor_Create_Centrally_ADDPurch')
})

//VSR
app.get("/Vendor_Create_Centrally_VSR_SUBPartner", (req, res) => {
  res.render('Vendor_Create_Centrally_VSR_SUBPartner')
})
app.get("/Vendor_Create_Centrally_VSR_SUBPurch", (req, res) => {
  res.render('Vendor_Create_Centrally_VSR_SUBPurch')
})

//plant
app.get("/Vendor_Create_Centrally_Plant_PlantLvl", (req, res) => {
  res.render('Vendor_Create_Centrally_Plant_PlantLvl')
})
app.get("/Vendor_Create_Centrally_Plant_PurchData", (req, res) => {
  res.render('Vendor_Create_Centrally_Plant_PurchData')
})


//change
// general
app.get("/Vendor_Change_Centrally_Gen_Add", (req, res) => {
  res.render('Vendor_Change_Centrally_Gen_Add')
})

app.get("/Vendor_Change_Centrally_Gen_Comm", (req, res) => {
  res.render('Vendor_Change_Centrally_Gen_Comm')
})

app.get("/Vendor_Change_Centrally_Gen_cont", (req, res) => {
  res.render('Vendor_Change_Centrally_Gen_cont')
})

app.get("/Vendor_Change_Centrally_Gen_Pay", (req, res) => {
  res.render('Vendor_Change_Centrally_Gen_Pay')
})

app.get("/Vendor_Change_Centrally_Gen_Contact", (req, res) => {
  res.render('Vendor_Change_Centrally_Gen_Contact')
})

// Compay Code
app.get("/Vendor_Change_Centrally_Cc_Acc", (req, res) => {
  res.render('Vendor_Change_Centrally_Cc_Acc')
})
app.get("/Vendor_Change_Centrally_Cc_Corr", (req, res) => {
  res.render('Vendor_Change_Centrally_Cc_Corr')
})
app.get("/Vendor_Change_Centrally_Cc_Pay", (req, res) => {
  res.render('Vendor_Change_Centrally_Cc_Pay')
})
app.get("/Vendor_Change_Centrally_Cc_WH", (req, res) => {
  res.render('Vendor_Change_Centrally_Cc_WH')
})
//Purchasing data


app.get("/Vendor_Change_Centrally_PurchData", (req, res) => {
  res.render('Vendor_Change_Centrally_PurchData')
})
app.get("/Vendor_Change_Centrally_Partner", (req, res) => {
  res.render('Vendor_Change_Centrally_Partner')
})
app.get("/Vendor_Change_Centrally_ADDPurch", (req, res) => {
  res.render('Vendor_Change_Centrally_ADDPurch')
})
//VSR
app.get("/Vendor_Change_Centrally_VSR_SUBPartner", (req, res) => {
  res.render('Vendor_Change_Centrally_VSR_SUBPartner')
})
app.get("/Vendor_Change_Centrally_VSR_SUBPurch", (req, res) => {
  res.render('Vendor_Change_Centrally_VSR_SUBPurch')
})

//plant
app.get("/Vendor_Change_Centrally_Plant_PlantLvl", (req, res) => {
  res.render('Vendor_Change_Centrally_Plant_PlantLvl')
})
app.get("/Vendor_Change_Centrally_Plant_PurchData", (req, res) => {
  res.render('Vendor_Change_Centrally_Plant_PurchData')
})



//display
// general

app.get("/Vendor_Display_Centrally_Gen_Add", (req, res) => {
  res.render('Vendor_Display_Centrally_Gen_Add')
})

app.get("/Vendor_Display_Centrally_Gen_Comm", (req, res) => {
  res.render('Vendor_Display_Centrally_Gen_Comm')
})

app.get("/Vendor_Display_Centrally_Gen_cont", (req, res) => {
  res.render('Vendor_Display_Centrally_Gen_cont')
})

app.get("/Vendor_Display_Centrally_Gen_Pay", (req, res) => {
  res.render('Vendor_Display_Centrally_Gen_Pay')
})

app.get("/Vendor_Display_Centrally_Gen_Contact", (req, res) => {
  res.render('Vendor_Display_Centrally_Gen_Contact')
})

// Compay Code
app.get("/Vendor_Display_Centrally_Cc_Acc", (req, res) => {
  res.render('Vendor_Display_Centrally_Cc_Acc')
})
app.get("/Vendor_Display_Centrally_Cc_Corr", (req, res) => {
  res.render('Vendor_Display_Centrally_Cc_Corr')
})
app.get("/Vendor_Display_Centrally_Cc_Pay", (req, res) => {
  res.render('Vendor_Display_Centrally_Cc_Pay')
})
app.get("/Vendor_Display_Centrally_Cc_WH", (req, res) => {
  res.render('Vendor_Display_Centrally_Cc_WH')
})

//Purchasing data


app.get("/Vendor_Display_Centrally_PurchData", (req, res) => {
  res.render('Vendor_Display_Centrally_PurchData')
})
app.get("/Vendor_Display_Centrally_Partner", (req, res) => {
  res.render('Vendor_Display_Centrally_Partner')
})
app.get("/Vendor_Display_Centrally_ADDPurch", (req, res) => {
  res.render('Vendor_Display_Centrally_ADDPurch')
})

//VSR
app.get("/Vendor_Display_Centrally_VSR_SUBPartner", (req, res) => {
  res.render('Vendor_Display_Centrally_VSR_SUBPartner')
})
app.get("/Vendor_Display_Centrally_VSR_SUBPurch", (req, res) => {
  res.render('Vendor_Display_Centrally_VSR_SUBPurch')
})

//plant
app.get("/Vendor_Display_Centrally_Plant_PlantLvl", (req, res) => {
  res.render('Vendor_Display_Centrally_Plant_PlantLvl')
})
app.get("/Vendor_Display_Centrally_Plant_PurchData", (req, res) => {
  res.render('Vendor_Display_Centrally_Plant_PurchData')
})







//setup procedure with classification


app.get("/Purchasing_Classification", (req, res) => {
  res.render('Purchasing_Classification')
})
app.get("/Purch_ReleaseProcedure_ReleaseGroup", (req, res) => {
  res.render('Purch_ReleaseProcedure_ReleaseGroup')
})
app.get("/Purch_ReleaseProcedure_ReleaseCode", (req, res) => {
  res.render('Purch_ReleaseProcedure_ReleaseCode')
})
app.get("/Purch_ReleaseProcedure_ReleaseIndicator", (req, res) => {
  res.render('Purch_ReleaseProcedure_ReleaseIndicator')
})
app.get("/Purch_ReleaseProcedure_ReleaseStratigies", (req, res) => {
  res.render('Purch_ReleaseProcedure_ReleaseStratigies')
})



//Purchasing
app.get("/PurchaseOrder_DocumentTypes", (req, res) => {
  res.render('PurchaseOrder_DocumentTypes')
})

app.get("/PurchaseOrder_NumberRange", (req, res) => {
  res.render('PurchaseOrder_NumberRange')
})


app.get("/PurchaseOrder_Classes", (req, res) => {
  res.render('PurchaseOrder_Classes')
})
app.get("/PurchaseOrder_Classification", (req, res) => {
  res.render('PurchaseOrder_Classification')
})
app.get("/PurchaseOrder_Charateristics", (req, res) => {
  res.render('PurchaseOrder_Charateristics')
})




app.get("/PurchaseOrder_ScreenLayout", (req, res) => {
  res.render('PurchaseOrder_ScreenLayout')
})
app.get("/Purchasing_ScreenLayout", (req, res) => {
  res.render('Purchasing_ScreenLayout')
})
app.get("/PurchasingScreenLayoutNewEntry", (req, res) => {
  res.render('PurchasingScreenLayoutNewEntry')
})
app.get("/PurchaseOrderScreenLayoutNewEntry", (req, res) => {
  res.render('PurchaseOrderScreenLayoutNewEntry')
})


app.get("/PurchaseOrderFieldSelection", (req, res) => {
  res.render('PurchaseOrderFieldSelection')
})
app.get("/PurchasingFieldSelection", (req, res) => {
  res.render('PurchasingFieldSelection')
})


// Field Selection - Purchase Requisition
app.get("/Purchasing_BasicData", (req, res) => {
  res.render('Purchasing_BasicData')
})
app.get("/Purchasing_Terms", (req, res) => {
  res.render('Purchasing_Terms')
})
app.get("/Purchasing_RefHeader", (req, res) => {
  res.render('Purchasing_RefHeader')
})
app.get("/Purchasing_AdmHeader", (req, res) => {
  res.render('Purchasing_AdmHeader')
})
app.get("/Purchasing_SuplyingPlant", (req, res) => {
  res.render('Purchasing_SuplyingPlant')
})
app.get("/Purchasing_Q&P", (req, res) => {
  res.render('Purchasing_Q&P')
})
app.get("/Purchasing_DeadlineMonitoring", (req, res) => {
  res.render('Purchasing_DeadlineMonitoring')
})
app.get("/Purchasing_GR_IR", (req, res) => {
  res.render('Purchasing_GR_IR')
})
app.get("/Purchasing_RefItem", (req, res) => {
  res.render('Purchasing_RefItem')
})
app.get("/Purchasing_AdmItem", (req, res) => {
  res.render('Purchasing_AdmItem')
})
app.get("/Purchasing_ScControl", (req, res) => {
  res.render('Purchasing_ScControl')
})
app.get("/Purchasing_AdmData", (req, res) => {
  res.render('Purchasing_AdmData')
})
app.get("/Purchasing_DelMonitoring", (req, res) => {
  res.render('Purchasing_DelMonitoring')
})
app.get("/Purchasing_Enjoy", (req, res) => {
  res.render('Purchasing_Enjoy')
})


// Field Selection - Purchase Order
app.get("/PurchaseOrder_BasicData", (req, res) => {
  res.render('PurchaseOrder_BasicData')
})
app.get("/PurchaseOrder_Terms", (req, res) => {
  res.render('PurchaseOrder_Terms')
})
app.get("/PurchaseOrder_RefHeader", (req, res) => {
  res.render('PurchaseOrder_RefHeader')
})
app.get("/PurchaseOrder_AdmHeader", (req, res) => {
  res.render('PurchaseOrder_AdmHeader')
})
app.get("/PurchaseOrder_SuplyingPlant", (req, res) => {
  res.render('PurchaseOrder_SuplyingPlant')
})
app.get("/PurchaseOrder_Q&P", (req, res) => {
  res.render('PurchaseOrder_Q&P')
})
app.get("/PurchaseOrder_DeadlineMonitoring", (req, res) => {
  res.render('PurchaseOrder_DeadlineMonitoring')
})
app.get("/PurchaseOrder_GR_IR", (req, res) => {
  res.render('PurchaseOrder_GR_IR')
})
app.get("/PurchaseOrder_RefItem", (req, res) => {
  res.render('PurchaseOrder_RefItem')
})
app.get("/PurchaseOrder_AdmItem", (req, res) => {
  res.render('PurchaseOrder_AdmItem')
})
app.get("/PurchaseOrder_ScControl", (req, res) => {
  res.render('PurchaseOrder_ScControl')
})
app.get("/PurchaseOrder_AdmData", (req, res) => {
  res.render('PurchaseOrder_AdmData')
})
app.get("/PurchaseOrder_DelMonitoring", (req, res) => {
  res.render('PurchaseOrder_DelMonitoring')
})
app.get("/PurchaseOrder_Enjoy", (req, res) => {
  res.render('PurchaseOrder_Enjoy')
})



// Physical inventory
app.get("/Physical_Plant_Param", (req, res) => {
  res.render('Physical_Plant_Param')
})
app.get("/Physical_Plant_ParamNewEntry", (req, res) => {
  res.render('Physical_Plant_ParamNewEntry')
})
app.get("/Physical_Number_Assgn", (req, res) => {
  res.render('Physical_Number_Assgn')
})
app.get("/Physical_MIGO", (req, res) => {
  res.render('Physical_MIGO')
})
app.get("/Physical_MIGO_Field", (req, res) => {
  res.render('Physical_MIGO_Field')
})
app.get("/Physical_MIGO_Movement", (req, res) => {
  res.render('Physical_MIGO_Movement')
})

app.get("/Physical_Number_Assgn_Accounting", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting')
})
app.get("/Physical_Number_Assgn_Material", (req, res) => {
  res.render('Physical_Number_Assgn_Material')
})
app.get("/Physical_Number_Assgn_Reservation", (req, res) => {
  res.render('Physical_Number_Assgn_Reservation')
})
app.get("/Physical_Number_Assgn_Goods", (req, res) => {
  res.render('Physical_Number_Assgn_Goods')
})

app.get("/Physical_Number_Assgn_Accounting_Doc", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting_Doc')
})
app.get("/Physical_Number_Assgn_Accounting_Doc_NewEntry", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting_Doc_NewEntry')
})

app.get("/Physical_Number_Assgn_Accounting_Num", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting_Num')
})
app.get("/Physical_Number_Assgn_Accounting_Issue", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting_Issue')
})
app.get("/Physical_Number_Assgn_Accounting_Automatic", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting_Automatic')
})
app.get("/Physical_Number_Assgn_Accounting_Physical", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting_Physical')
})
app.get("/Physical_Number_Assgn_Accounting_Receipt", (req, res) => {
  res.render('Physical_Number_Assgn_Accounting_Receipt')
})

app.get("/Physical_Number_Assgn_Reservation_Interval", (req, res) => {
  res.render('Physical_Number_Assgn_Reservation_Interval')
})
app.get("/Physical_Number_Assgn_Reservation_Num", (req, res) => {
  res.render('Physical_Number_Assgn_Reservation_Num')
})


app.get("/Physical_Number_Assgn_Goods_Plant", (req, res) => {
  res.render('Physical_Number_Assgn_Goods_Plant')
})
app.get("/Physical_Number_Assgn_Goods_Num", (req, res) => {
  res.render('Physical_Number_Assgn_Goods_Num')
})
app.get("/Physical_Number_Assgn_Goods_Interval", (req, res) => {
  res.render('Physical_Number_Assgn_Goods_Interval')
})
app.get("/Physical_Number_Assgn_Goods_Object", (req, res) => {
  res.render('Physical_Number_Assgn_Goods_Object')
})
app.get("/Physical_Number_Assgn_Goods_Num_NewEntry", (req, res) => {
  res.render('Physical_Number_Assgn_Goods_Num_NewEntry')
})

app.get("/Physical_Number_Assgn_Goods_Object", (req, res) => {
  res.render('Physical_Number_Assgn_Goods_Object')
})
app.get("/Physical_Number_Assgn_Goods_Object_NewEntry", (req, res) => {
  res.render('Physical_Number_Assgn_Goods_Object_NewEntry')
})


app.get("/Physical_Number_Assgn_MoveInitials", (req, res) => {
  res.render('Physical_Number_Assgn_MoveInitials')
})



// goods issue/transfer postings

app.get("/Physical_Postings", (req, res) => {
  res.render('Physical_Postings')
})
app.get("/Physical_Postings_Storage", (req, res) => {
  res.render('Physical_Postings_Storage')
})
app.get("/Physical_Postings_Assignment", (req, res) => {
  res.render('Physical_Postings_Assignment')
})
app.get("/Physical_Postings_ScLayout", (req, res) => {
  res.render('Physical_Postings_ScLayout')
})
app.get("/Physical_Postings_Storage_Plant", (req, res) => {
  res.render('Physical_Postings_Storage_Plant')
})
app.get("/Physical_Postings_Storage_Mvt", (req, res) => {
  res.render('Physical_Postings_Storage_Mvt')
})
app.get("/Physical_Postings_Goods", (req, res) => {
  res.render('Physical_Postings_Goods')
})
app.get("/Physical_Postings_Goods_Plant", (req, res) => {
  res.render('Physical_Postings_Goods_Plant')
})
app.get("/Physical_Postings_Goods_Mvt", (req, res) => {
  res.render('Physical_Postings_Goods_Mvt')
})
app.get("/Physical_Postings_Negative", (req, res) => {
  res.render('Physical_Postings_Negative')
})


app.get("/Physical_Postings_Negative_Stock_Plant_Loc", (req, res) => {
  res.render('Physical_Postings_Negative_Stock_Plant_Loc')
})
app.get("/Physical_Postings_Negative_Stock_Plant", (req, res) => {
  res.render('Physical_Postings_Negative_Stock_Plant')
})
// Physical_Postings_ScLayout_Overview

app.get("/Physical_Postings_ScLayout_Overview", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview')
})
app.get("/Physical_Postings_ScLayout_Overview_Gen", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Gen')
})

app.get("/Physical_Postings_ScLayout_Overview_Acc", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Acc')
})

app.get("/Physical_Postings_ScLayout_Overview_Add", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Add')
})
app.get("/Physical_Postings_ScLayout_Overview_MM", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_MM')
})
app.get("/Physical_Postings_ScLayout_Overview_Real", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Real')
})
app.get("/Physical_Postings_ScLayout_Overview_Transfer", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Transfer')
})
app.get("/Physical_Postings_ScLayout_Overview_War", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_War')
})
app.get("/Physical_Postings_ScLayout_Overview_Pay", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Pay')
})
app.get("/Physical_Postings_ScLayout_Overview_Tax", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Tax')
})
app.get("/Physical_Postings_ScLayout_Overview_Foreign", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Foreign')
})
app.get("/Physical_Postings_ScLayout_Overview_Cons", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Cons')
})
app.get("/Physical_Postings_ScLayout_Overview_Fin", (req, res) => {
  res.render('Physical_Postings_ScLayout_Overview_Fin')
})

//Physical receipt
app.get("/Physical_Receipt", (req, res) => {
  res.render('Physical_Receipt')
})

app.get("/Physical_Receipt_Loc", (req, res) => {
  res.render('Physical_Receipt_Loc')
})
app.get("/Physical_Receipt_Storage_Plant", (req, res) => {
  res.render('Physical_Receipt_Storage_Plant')
})
app.get("/Physical_Receipt_Storage_Mvt", (req, res) => {
  res.render('Physical_Receipt_Storage_Mvt')
})

app.get("/Physical_Receipt_Purchase", (req, res) => {
  res.render('Physical_Receipt_Purchase')
})
app.get("/Physical_Receipt_Assignment", (req, res) => {
  res.render('Physical_Receipt_Assignment')
})
app.get("/Physical_Receipt_ScLayout", (req, res) => {
  res.render('Physical_Receipt_ScLayout')
})





// Movements Physical

app.get("/Physical_Movements", (req, res) => {
  res.render('Physical_Movements')
})


app.get("/Physical_Movements_Storage", (req, res) => {
  res.render('Physical_Movements_Storage')
})
app.get("/Physical_Movements_Storage_Plant", (req, res) => {
  res.render('Physical_Movements_Storage_Plant')
})
app.get("/Physical_Movements_Storage_Mvt", (req, res) => {
  res.render('Physical_Movements_Storage_Mvt')
})



app.get("/Physical_Movements_Assignment", (req, res) => {
  res.render('Physical_Movements_Assignment')
})


app.get("/Physical_Movements_ScLayout", (req, res) => {
  res.render('Physical_Movements_ScLayout')
})
app.get("/Physical_Movements_ScLayout_Overview", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview')
})
app.get("/Physical_Movements_ScLayout_Overview_Gen", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Gen')
})

app.get("/Physical_Movements_ScLayout_Overview_Acc", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Acc')
})

app.get("/Physical_Movements_ScLayout_Overview_Add", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Add')
})
app.get("/Physical_Movements_ScLayout_Overview_MM", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_MM')
})
app.get("/Physical_Movements_ScLayout_Overview_Real", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Real')
})
app.get("/Physical_Movements_ScLayout_Overview_Transfer", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Transfer')
})
app.get("/Physical_Movements_ScLayout_Overview_War", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_War')
})
app.get("/Physical_Movements_ScLayout_Overview_Pay", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Pay')
})
app.get("/Physical_Movements_ScLayout_Overview_Tax", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Tax')
})
app.get("/Physical_Movements_ScLayout_Overview_Foreign", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Foreign')
})
app.get("/Physical_Movements_ScLayout_Overview_Cons", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Cons')
})
app.get("/Physical_Movements_ScLayout_Overview_Fin", (req, res) => {
  res.render('Physical_Movements_ScLayout_Overview_Fin')
})



app.get("/Physical_Movements_Goods", (req, res) => {
  res.render('Physical_Movements_Goods')
})

app.get("/Physical_Movements_Goods_Plant", (req, res) => {
  res.render('Physical_Movements_Goods_Plant')
})
app.get("/Physical_Movements_Goods_Mvt", (req, res) => {
  res.render('Physical_Movements_Goods_Mvt')
})


// SD output

app.get("/Output_Determination", (req, res) => {
  res.render('Output_Determination')
})
// Billing
app.get("/Output_Determination_Billing", (req, res) => {
  res.render('Output_Determination_Billing')
})
// condition
app.get("/Output_Det_Billing_Condition", (req, res) => {
  res.render('Output_Det_Billing_Condition')
})
app.get("/Output_Det_Billing_Condition_Table", (req, res) => {
  res.render('Output_Det_Billing_Condition_Table')
})

// output
app.get("/Output_Det_Billing_Output", (req, res) => {
  res.render('Output_Det_Billing_Output')
})
app.get("/Output_Det_Billing_Output_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_Output_NewEntry')
})

app.get("/Output_Det_Billing_output_Mail", (req, res) => {
  res.render('Output_Det_Billing_output_Mail')
})
app.get("/Output_Det_Billing_Output_Mail_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_Output_Mail_NewEntry')
})
app.get("/Output_Det_Billing_output_Processing", (req, res) => {
  res.render('Output_Det_Billing_output_Processing')
})
app.get("/Output_Det_Billing_output_Processing_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_output_Processing_NewEntry')
})

app.get("/Output_Det_Billing_output_Partner", (req, res) => {
  res.render('Output_Det_Billing_output_Partner')
})
app.get("/Output_Det_Billing_output_Partner_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_output_Partner_NewEntry')
})





// access
app.get("/Output_Det_Billing_Access", (req, res) => {
  res.render('Output_Det_Billing_Access')
})
app.get("/Output_Det_Billing_Access_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_Access_NewEntry')
})
app.get("/Output_Det_Billing_AccessTable", (req, res) => {
  res.render('Output_Det_Billing_AccessTable')
})
app.get("/Output_Det_Billing_AccessTable_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_AccessTable_NewEntry')
})
app.get("/Output_Det_Billing_AccessFields", (req, res) => {
  res.render('Output_Det_Billing_AccessFields')
})



//maintain procedure

app.get("/Output_Det_Billing_MaintainProcedure", (req, res) => {
  res.render('Output_Det_Billing_MaintainProcedure')
})

app.get("/Output_Det_Billing_MaintainProcedure_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_MaintainProcedure_NewEntry')
})

app.get("/Output_Det_Billing_MaintainProcedure_ControldataTable", (req, res) => {
  res.render('Output_Det_Billing_MaintainProcedure_ControldataTable')
})

app.get("/Output_Det_Billing_MaintainProcedure_ControldataTable_NewEntry", (req, res) => {
  res.render('Output_Det_Billing_MaintainProcedure_ControldataTable_NewEntry')
})

//Assign  procedure
app.get("/Output_Det_Billing_AssignProcedure", (req, res) => {
  res.render('Output_Det_Billing_AssignProcedure')
})











// sales document
app.get("/Output_Determination_SalesDoc", (req, res) => {
  res.render('Output_Determination_SalesDoc')
})


// condition
app.get("/Output_Det_SDoc_Condition", (req, res) => {
  res.render('Output_Det_SDoc_Condition')
})
app.get("/Output_Det_SDoc_Condition_Table", (req, res) => {
  res.render('Output_Det_SDoc_Condition_Table')
})

// output
app.get("/Output_Det_SDoc_Output", (req, res) => {
  res.render('Output_Det_SDoc_Output')
})
app.get("/Output_Det_SDoc_Output_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_Output_NewEntry')
})

app.get("/Output_Det_SDoc_output_Mail", (req, res) => {
  res.render('Output_Det_SDoc_output_Mail')
})
app.get("/Output_Det_SDoc_Output_Mail_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_Output_Mail_NewEntry')
})
app.get("/Output_Det_SDoc_output_Processing", (req, res) => {
  res.render('Output_Det_SDoc_output_Processing')
})
app.get("/Output_Det_SDoc_output_Processing_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_output_Processing_NewEntry')
})

app.get("/Output_Det_SDoc_output_Partner", (req, res) => {
  res.render('Output_Det_SDoc_output_Partner')
})
app.get("/Output_Det_SDoc_output_Partner_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_output_Partner_NewEntry')
})





// access
app.get("/Output_Det_SDoc_Access", (req, res) => {
  res.render('Output_Det_SDoc_Access')
})
app.get("/Output_Det_SDoc_Access_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_Access_NewEntry')
})
app.get("/Output_Det_SDoc_AccessTable", (req, res) => {
  res.render('Output_Det_SDoc_AccessTable')
})
app.get("/Output_Det_SDoc_AccessTable_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_AccessTable_NewEntry')
})
app.get("/Output_Det_SDoc_AccessFields", (req, res) => {
  res.render('Output_Det_SDoc_AccessFields')
})



//maintain procedure

app.get("/Output_Det_SDoc_MaintainProcedure", (req, res) => {
  res.render('Output_Det_SDoc_MaintainProcedure')
})

app.get("/Output_Det_SDoc_MaintainProcedure_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_MaintainProcedure_NewEntry')
})

app.get("/Output_Det_SDoc_MaintainProcedure_ControldataTable", (req, res) => {
  res.render('Output_Det_SDoc_MaintainProcedure_ControldataTable')
})

app.get("/Output_Det_SDoc_MaintainProcedure_ControldataTable_NewEntry", (req, res) => {
  res.render('Output_Det_SDoc_MaintainProcedure_ControldataTable_NewEntry')
})

//Assign  procedure
app.get("/Output_Det_SDoc_AssignProcedure", (req, res) => {
  res.render('Output_Det_SDoc_AssignProcedure')
})
app.get("/Output_Det_SDoc_AssignProcedure_Header", (req, res) => {
  res.render('Output_Det_SDoc_AssignProcedure_Header')
})
app.get("/Output_Det_SDoc_AssignProcedure_Item", (req, res) => {
  res.render('Output_Det_SDoc_AssignProcedure_Item')
})









// sales Activity


app.get("/Output_Determination_SalesActivity", (req, res) => {
  res.render('Output_Determination_SalesActivity')
})
// condition
app.get("/Output_Det_SA_Condition", (req, res) => {
  res.render('Output_Det_SA_Condition')
})
app.get("/Output_Det_SA_Condition_Table", (req, res) => {
  res.render('Output_Det_SA_Condition_Table')
})

// output
app.get("/Output_Det_SA_Output", (req, res) => {
  res.render('Output_Det_SA_Output')
})
app.get("/Output_Det_SA_Output_NewEntry", (req, res) => {
  res.render('Output_Det_SA_Output_NewEntry')
})

app.get("/Output_Det_SA_output_Mail", (req, res) => {
  res.render('Output_Det_SA_output_Mail')
})
app.get("/Output_Det_SA_Output_Mail_NewEntry", (req, res) => {
  res.render('Output_Det_SA_Output_Mail_NewEntry')
})
app.get("/Output_Det_SA_output_Processing", (req, res) => {
  res.render('Output_Det_SA_output_Processing')
})
app.get("/Output_Det_SA_output_Processing_NewEntry", (req, res) => {
  res.render('Output_Det_SA_output_Processing_NewEntry')
})

app.get("/Output_Det_SA_output_Partner", (req, res) => {
  res.render('Output_Det_SA_output_Partner')
})
app.get("/Output_Det_SA_output_Partner_NewEntry", (req, res) => {
  res.render('Output_Det_SA_output_Partner_NewEntry')
})





// access
app.get("/Output_Det_SA_Access", (req, res) => {
  res.render('Output_Det_SA_Access')
})
app.get("/Output_Det_SA_Access_NewEntry", (req, res) => {
  res.render('Output_Det_SA_Access_NewEntry')
})
app.get("/Output_Det_SA_AccessTable", (req, res) => {
  res.render('Output_Det_SA_AccessTable')
})
app.get("/Output_Det_SA_AccessTable_NewEntry", (req, res) => {
  res.render('Output_Det_SA_AccessTable_NewEntry')
})
app.get("/Output_Det_SA_AccessFields", (req, res) => {
  res.render('Output_Det_SA_AccessFields')
})



//maintain procedure

app.get("/Output_Det_SA_MaintainProcedure", (req, res) => {
  res.render('Output_Det_SA_MaintainProcedure')
})

app.get("/Output_Det_SA_MaintainProcedure_NewEntry", (req, res) => {
  res.render('Output_Det_SA_MaintainProcedure_NewEntry')
})

app.get("/Output_Det_SA_MaintainProcedure_ControldataTable", (req, res) => {
  res.render('Output_Det_SA_MaintainProcedure_ControldataTable')
})

app.get("/Output_Det_SA_MaintainProcedure_ControldataTable_NewEntry", (req, res) => {
  res.render('Output_Det_SA_MaintainProcedure_ControldataTable_NewEntry')
})

//Assign  procedure
app.get("/Output_Det_SA_AssignProcedure", (req, res) => {
  res.render('Output_Det_SA_AssignProcedure')
})



            







// SD Free goods

app.get("/Free_Goods_NumRange", (req, res) => {
  res.render('Free_Goods_NumRange')
})
app.get("/Free_Goods_Condition", (req, res) => {
  res.render('Free_Goods_Condition')
})
app.get("/Free_Goods_ConditionTable", (req, res) => {
  res.render('Free_Goods_ConditionTable')
})
app.get("/Free_Goods_accessSequenc", (req, res) => {
  res.render('Free_Goods_accessSequenc')
})
app.get("/Free_Goods_ConditionTypes", (req, res) => {
  res.render('Free_Goods_ConditionTypes')
})
app.get("/Free_Goods_Pricingprocedure", (req, res) => {
  res.render('Free_Goods_Pricingprocedure')
})
app.get("/Free_Goods_Determination", (req, res) => {
  res.render('Free_Goods_Determination')
})

app.get("/Free_Goods_DeterminationNewEntry", (req, res) => {
  res.render('Free_Goods_DeterminationNewEntry')
})

app.get("/FreeGoods_AccessSequence_NewEntry", (req, res) => {
  res.render('FreeGoods_AccessSequence_NewEntry')
})
app.get("/FreeGoods_AccessTable", (req, res) => {
  res.render('FreeGoods_AccessTable')
})
app.get("/FreeGoods_AccessTable_NewEntry", (req, res) => {
  res.render('FreeGoods_AccessTable_NewEntry')
})
app.get("/FreeGoods_AccessFields", (req, res) => {
  res.render('FreeGoods_AccessFields')
})
app.get("/FreeGoods_PricingNewEntry", (req, res) => {
  res.render('FreeGoods_PricingNewEntry')
})
app.get("/FreeGoods_ControldataTable", (req, res) => {
  res.render('FreeGoods_ControldataTable')
})
app.get("/FreeGoods_ControldataTable_NewEntry", (req, res) => {
  res.render('FreeGoods_ControldataTable_NewEntry')
})


//Sales Distribuation

app.get("/SD_MasterData", (req, res) => {
  res.render('SD_MasterData')
})

app.get("/SD_BasicFunction", (req, res) => {
  res.render('SD_BasicFunction')
})

app.get("/SD_Sales", (req, res) => {
  res.render('SD_Sales')
})
app.get("/SD_Billing", (req, res) => {
  res.render('SD_Billing')
})








app.get("/SD_BillingDoc_Types", (req, res) => {
  res.render('SD_BillingDoc_Types')
})

app.get("/SD_BillingDoc_Types_NewEntry", (req, res) => {
  res.render('SD_BillingDoc_Types_NewEntry')
})

app.get("/SD_BillingDoc_NumRange", (req, res) => {
  res.render('SD_BillingDoc_NumRange')
})


// Listing/Exclusion

app.get("/Lising_Exclusion", (req, res) => {
  res.render('Lising_Exclusion')
})

app.get("/Listing_Exclusion_Sales", (req, res) => {
  res.render('Listing_Exclusion_Sales')
})

app.get("/Listing_Exclusion_Sales_NewEntry", (req, res) => {
  res.render('Listing_Exclusion_Sales_NewEntry')
})

app.get("/Listing_Exclusion_Maintain", (req, res) => {
  res.render('Listing_Exclusion_Maintain')
})

app.get("/Listing_Exclusion_Maintain_NewEntry", (req, res) => {
  res.render('Listing_Exclusion_Maintain_NewEntry')
})

app.get("/Listing_Exclusion_Procedures", (req, res) => {
  res.render('Listing_Exclusion_Procedures')
})

app.get("/Listing_Exclusion_Procedures_NewEntry", (req, res) => {
  res.render('Listing_Exclusion_Procedures_NewEntry')
})

app.get("/Listing_Exclusion_Procedures_ControlData", (req, res) => {
  res.render('Listing_Exclusion_Procedures_ControlData')
})

app.get("/Listing_Exclusion_Procedures_ControlData_NewEntry", (req, res) => {
  res.render('Listing_Exclusion_Procedures_ControlData_NewEntry')
})

app.get("/Listing_Exclusion_Sequence", (req, res) => {
  res.render('Listing_Exclusion_Sequence')
})

app.get("/Listing_Exclusion_Sequence_NewEntry", (req, res) => {
  res.render('Listing_Exclusion_Sequence_NewEntry')
})

app.get("/Listing_Exclusion_Sequence_Access", (req, res) => {
  res.render('Listing_Exclusion_Sequence_Access')
})

app.get("/Listing_Exclusion_Sequence_Access_NewEntry", (req, res) => {
  res.render('Listing_Exclusion_Sequence_Access_NewEntry')
})

app.get("/Listing_Exclusion_Sequence_AccessFields", (req, res) => {
  res.render('Listing_Exclusion_Sequence_AccessFields')
})

app.get("/Listing_Exclusion_Allowed", (req, res) => {
  res.render('Listing_Exclusion_Allowed')
})

app.get("/Listing_Exclusion_Allowed_NewEntry", (req, res) => {
  res.render('Listing_Exclusion_Allowed_NewEntry')
})

app.get("/Listing_Exclusion_Condition", (req, res) => {
  res.render('Listing_Exclusion_Condition')
})

app.get("/Listing_Exclusion_ConditionTable", (req, res) => {
  res.render('Listing_Exclusion_ConditionTable')
})



// sd credit managment

app.get("/SD_CreditManagment", (req, res) => {
  res.render('SD_CreditManagment')
})

app.get("/SD_Credit_Group", (req, res) => {
  res.render('SD_Credit_Group')
})
app.get("/SD_Credit_GroupNewEntry", (req, res) => {
  res.render('SD_Credit_GroupNewEntry')
})

app.get("/SD_Credit_Assign", (req, res) => {
  res.render('SD_Credit_Assign')
})

app.get("/SD_Credit_Control", (req, res) => {
  res.render('SD_Credit_Control')
})

app.get("/SD_Credit_ControlNewEntry", (req, res) => {
  res.render('SD_Credit_ControlNewEntry')
})

app.get("/SD_CreditLimit", (req, res) => {
  res.render('SD_CreditLimit')
})
app.get("/SD_Credit_Assign_OrderType", (req, res) => {
  res.render('SD_Credit_Assign_OrderType')
})
app.get("/SD_Credit_Assign_Deltype", (req, res) => {
  res.render('SD_Credit_Assign_Deltype')
})









// Text Type
app.get("/SD_Text_TextType_Agency_Change1", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1')
})

app.get("/SD_Text_TextType_Agency_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_NewEntry')
})
app.get("/SD_Text_TextType_Agency_Change2", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2')
})
app.get("/SD_Text_TextType_Agency_Change2_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_NewEntry')
})

app.get("/SD_Text_TextType_billingDoc_Change1", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1')
})
app.get("/SD_Text_TextType_billingDoc_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_NewEntry')
})
app.get("/SD_Text_TextType_billingDoc_Change2", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2')
})
app.get("/SD_Text_TextType_billingDoc_Change2_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_NewEntry')
})

app.get("/SD_Text_TextType_Cust_Change1", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change1')
})
app.get("/SD_Text_TextType_Cust_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change1_NewEntry')
})
app.get("/SD_Text_TextType_Cust_Change2", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change2')
})
app.get("/SD_Text_TextType_Cust_Change2_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change2_NewEntry')
})
app.get("/SD_Text_TextType_Cust_Change3", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change3')
})
app.get("/SD_Text_TextType_Cust_Change3_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change3_NewEntry')
})
app.get("/SD_Text_TextType_Delivery_Change1", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1')
})
app.get("/SD_Text_TextType_Delivery_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_NewEntry')
})

app.get("/SD_Text_TextType_Delivery_Change2", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2')
})
app.get("/SD_Text_TextType_Delivery_Change2_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_NewEntry')
})
app.get("/SD_Text_TextType_Financial_Change1", (req, res) => {
  res.render('SD_Text_TextType_Financial_Change1')
})
app.get("/SD_Text_TextType_Financial_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Financial_Change1_NewEntry')
})

app.get("/SD_Text_TextType_Info_Change1", (req, res) => {
  res.render('SD_Text_TextType_Info_Change1')
})
app.get("/SD_Text_TextType_Info_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Info_Change1_NewEntry')
})
app.get("/SD_Text_TextType_Legal_Change1", (req, res) => {
  res.render('SD_Text_TextType_Legal_Change1')
})
app.get("/SD_Text_TextType_Legal_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Legal_Change1_NewEntry')
})

app.get("/SD_Text_TextType_Pricing_Change1", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change1')
})
app.get("/SD_Text_TextType_Pricing_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change1_NewEntry')
})
app.get("/SD_Text_TextType_Pricing_Change2", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change2')
})
app.get("/SD_Text_TextType_Pricing_Change2_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change2_NewEntry')
})

app.get("/SD_Text_TextType_SalesAct_Change1", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1')
})
app.get("/SD_Text_TextType_SalesAct_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_NewEntry')
})
app.get("/SD_Text_TextType_SalesDoc_Change1", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_NewEntry')
})

app.get("/SD_Text_TextType_SalesDoc_Change2", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2')
})
app.get("/SD_Text_TextType_SalesDoc_Change2_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_NewEntry')
})
app.get("/SD_Text_TextType_Shipment_Change1", (req, res) => {
  res.render('SD_Text_TextType_Shipment_Change1')
})
app.get("/SD_Text_TextType_Shipment_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Shipment_Change1_NewEntry')
})

app.get("/SD_Text_TextType_Trading_Change1", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1')
})
app.get("/SD_Text_TextType_Trading_Change1_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_NewEntry')
})
app.get("/SD_Text_TextType_Trading_Change2", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2')
})
app.get("/SD_Text_TextType_Trading_Change2_NewEntry", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_NewEntry')
})












// Text Type ID
app.get("/SD_Text_TextType_Agency_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_ID')
})

app.get("/SD_Text_TextType_Agency_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_ID_New')
})
app.get("/SD_Text_TextType_Agency_Change2_ID", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_ID')
})
app.get("/SD_Text_TextType_Agency_Change2_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_ID_New')
})

app.get("/SD_Text_TextType_billingDoc_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_ID')
})
app.get("/SD_Text_TextType_billingDoc_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_ID_New')
})
app.get("/SD_Text_TextType_billingDoc_Change2_ID", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_ID')
})
app.get("/SD_Text_TextType_billingDoc_Change2_ID_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_ID_New')
})

app.get("/SD_Text_TextType_Cust_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change1_ID')
})
app.get("/SD_Text_TextType_Cust_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change1_ID_New')
})
app.get("/SD_Text_TextType_Cust_Change2_ID", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change2_ID')
})
app.get("/SD_Text_TextType_Cust_Change2_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change2_ID_New')
})
app.get("/SD_Text_TextType_Cust_Change3_ID", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change3_ID')
})
app.get("/SD_Text_TextType_Cust_Change3_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change3_ID_New')
})
app.get("/SD_Text_TextType_Delivery_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_ID')
})
app.get("/SD_Text_TextType_Delivery_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_ID_New')
})

app.get("/SD_Text_TextType_Delivery_Change2_ID", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_ID')
})
app.get("/SD_Text_TextType_Delivery_Change2_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_ID_New')
})
app.get("/SD_Text_TextType_Financial_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Financial_Change1_ID')
})
app.get("/SD_Text_TextType_Financial_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Financial_Change1_ID_New')
})

app.get("/SD_Text_TextType_Info_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Info_Change1_ID')
})
app.get("/SD_Text_TextType_Info_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Info_Change1_ID_New')
})
app.get("/SD_Text_TextType_Legal_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Legal_Change1_ID')
})
app.get("/SD_Text_TextType_Legal_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Legal_Change1_ID_New')
})

app.get("/SD_Text_TextType_Pricing_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change1_ID')
})
app.get("/SD_Text_TextType_Pricing_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change1_ID_New')
})
app.get("/SD_Text_TextType_Pricing_Change2_ID", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change2_ID')
})
app.get("/SD_Text_TextType_Pricing_Change2_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change2_ID_New')
})

app.get("/SD_Text_TextType_SalesAct_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_ID')
})
app.get("/SD_Text_TextType_SalesAct_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_ID_New')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_ID')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_ID_New')
})

app.get("/SD_Text_TextType_SalesDoc_Change2_ID", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_ID')
})
app.get("/SD_Text_TextType_SalesDoc_Change2_ID_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_ID_New')
})
app.get("/SD_Text_TextType_Shipment_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Shipment_Change1_ID')
})
app.get("/SD_Text_TextType_Shipment_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Shipment_Change1_ID_New')
})

app.get("/SD_Text_TextType_Trading_Change1_ID", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_ID')
})
app.get("/SD_Text_TextType_Trading_Change1_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_ID_New')
})
app.get("/SD_Text_TextType_Trading_Change2_ID", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_ID')
})
app.get("/SD_Text_TextType_Trading_Change2_ID_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_ID_New')
})



// Text Assignment

app.get("/SD_Text_TextType_Agency_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_Assgn')
})

app.get("/SD_Text_TextType_Agency_Change2_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_Assgn')
})

app.get("/SD_Text_TextType_billingDoc_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_Assgn')
})
app.get("/SD_Text_TextType_billingDoc_Change2_Assgn", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_Assgn')
})

app.get("/SD_Text_TextType_Cust_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change1_Assgn')
})
app.get("/SD_Text_TextType_Cust_Change2_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change2_Assgn')
})
app.get("/SD_Text_TextType_Cust_Change3_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Cust_Change3_Assgn')
})
app.get("/SD_Text_TextType_Delivery_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_Assgn')
})

app.get("/SD_Text_TextType_Delivery_Change2_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_Assgn')
})
app.get("/SD_Text_TextType_Financial_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Financial_Change1_Assgn')
})

app.get("/SD_Text_TextType_Info_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Info_Change1_Assgn')
})
app.get("/SD_Text_TextType_Legal_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Legal_Change1_Assgn')
})

app.get("/SD_Text_TextType_Pricing_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change1_Assgn')
})
app.get("/SD_Text_TextType_Pricing_Change2_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Pricing_Change2_Assgn')
})

app.get("/SD_Text_TextType_SalesAct_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_Assgn')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_Assgn')
})

app.get("/SD_Text_TextType_SalesDoc_Change2_Assgn", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_Assgn')
})
app.get("/SD_Text_TextType_Shipment_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Shipment_Change1_Assgn')
})

app.get("/SD_Text_TextType_Trading_Change1_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_Assgn')
})
app.get("/SD_Text_TextType_Trading_Change2_Assgn", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_Assgn')
})


// Access Sequence


app.get("/SD_Text_TextType_Agency_Change1_Access", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_Access')
})

app.get("/SD_Text_TextType_Agency_Change1_Access_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_Access_New')
})
app.get("/SD_Text_TextType_Agency_Change2_Access", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_Access')
})
app.get("/SD_Text_TextType_Agency_Change2_Access_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_Access_New')
})

app.get("/SD_Text_TextType_billingDoc_Change1_Access", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_Access')
})
app.get("/SD_Text_TextType_billingDoc_Change1_Access_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_Access_New')
})
app.get("/SD_Text_TextType_billingDoc_Change2_Access", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_Access')
})
app.get("/SD_Text_TextType_billingDoc_Change2_Access_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_Access_New')
})

app.get("/SD_Text_TextType_Delivery_Change1_Access", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_Access')
})
app.get("/SD_Text_TextType_Delivery_Change1_Access_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_Access_New')
})

app.get("/SD_Text_TextType_Delivery_Change2_Access", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_Access')
})
app.get("/SD_Text_TextType_Delivery_Change2_Access_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_Access_New')
})

app.get("/SD_Text_TextType_SalesAct_Change1_Access", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_Access')
})
app.get("/SD_Text_TextType_SalesAct_Change1_Access_New", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_Access_New')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_Access", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_Access')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_Access_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_Access_New')
})

app.get("/SD_Text_TextType_SalesDoc_Change2_Access", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_Access')
})
app.get("/SD_Text_TextType_SalesDoc_Change2_Access_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_Access_New')
})
app.get("/SD_Text_TextType_Trading_Change1_Access", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_Access')
})

app.get("/SD_Text_TextType_Trading_Change1_Access_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_Access_New')
})
app.get("/SD_Text_TextType_Trading_Change2_Access", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_Access')
})
app.get("/SD_Text_TextType_Trading_Change2_Access_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_Access_New')
})


// Access Text ID 



app.get("/SD_Text_TextType_Agency_Change1_AccessID", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_AccessID')
})

app.get("/SD_Text_TextType_Agency_Change1_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change1_AccessID_New')
})
app.get("/SD_Text_TextType_Agency_Change2_AccessID", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_AccessID')
})
app.get("/SD_Text_TextType_Agency_Change2_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_Change2_AccessID_New')
})

app.get("/SD_Text_TextType_billingDoc_Change1_AccessID", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_AccessID')
})
app.get("/SD_Text_TextType_billingDoc_Change1_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change1_AccessID_New')
})
app.get("/SD_Text_TextType_billingDoc_Change2_AccessID", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_AccessID')
})
app.get("/SD_Text_TextType_billingDoc_Change2_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_Change2_AccessID_New')
})

app.get("/SD_Text_TextType_Delivery_Change1_AccessID", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_AccessID')
})
app.get("/SD_Text_TextType_Delivery_Change1_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change1_AccessID_New')
})

app.get("/SD_Text_TextType_Delivery_Change2_AccessID", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_AccessID')
})
app.get("/SD_Text_TextType_Delivery_Change2_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_Change2_AccessID_New')
})

app.get("/SD_Text_TextType_SalesAct_Change1_AccessID", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_AccessID')
})
app.get("/SD_Text_TextType_SalesAct_Change1_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_Change1_AccessID_New')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_AccessID", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_AccessID')
})
app.get("/SD_Text_TextType_SalesDoc_Change1_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change1_AccessID_New')
})

app.get("/SD_Text_TextType_SalesDoc_Change2_AccessID", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_AccessID')
})
app.get("/SD_Text_TextType_SalesDoc_Change2_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_Change2_AccessID_New')
})
app.get("/SD_Text_TextType_Trading_Change1_AccessID", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_AccessID')
})

app.get("/SD_Text_TextType_Trading_Change1_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change1_AccessID_New')
})
app.get("/SD_Text_TextType_Trading_Change2_AccessID", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_AccessID')
})
app.get("/SD_Text_TextType_Trading_Change2_AccessID_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_Change2_AccessID_New')
})



// Text Type



app.get("/SD_Text_TextType_Agency_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Agency_TextType1')
})

app.get("/SD_Text_TextType_Agency_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_TextType1_New')
})
app.get("/SD_Text_TextType_Agency_TextType2", (req, res) => {
  res.render('SD_Text_TextType_Agency_TextType2')
})
app.get("/SD_Text_TextType_Agency_TextType2_New", (req, res) => {
  res.render('SD_Text_TextType_Agency_TextType2_New')
})

app.get("/SD_Text_TextType_billingDoc_TextType1", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_TextType1')
})
app.get("/SD_Text_TextType_billingDoc_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_TextType1_New')
})
app.get("/SD_Text_TextType_billingDoc_TextType2", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_TextType2')
})
app.get("/SD_Text_TextType_billingDoc_TextType2_New", (req, res) => {
  res.render('SD_Text_TextType_billingDoc_TextType2_New')
})

app.get("/SD_Text_TextType_Cust_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Cust_TextType1')
})
app.get("/SD_Text_TextType_Cust_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Cust_TextType1_New')
})
app.get("/SD_Text_TextType_Cust_TextType2", (req, res) => {
  res.render('SD_Text_TextType_Cust_TextType2')
})
app.get("/SD_Text_TextType_Cust_TextType2_New", (req, res) => {
  res.render('SD_Text_TextType_Cust_TextType2_New')
})
app.get("/SD_Text_TextType_Cust_TextType3", (req, res) => {
  res.render('SD_Text_TextType_Cust_TextType3')
})
app.get("/SD_Text_TextType_Cust_TextType3_New", (req, res) => {
  res.render('SD_Text_TextType_Cust_TextType3_New')
})
app.get("/SD_Text_TextType_Delivery_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Delivery_TextType1')
})
app.get("/SD_Text_TextType_Delivery_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_TextType1_New')
})

app.get("/SD_Text_TextType_Delivery_TextType2", (req, res) => {
  res.render('SD_Text_TextType_Delivery_TextType2')
})
app.get("/SD_Text_TextType_Delivery_TextType2_New", (req, res) => {
  res.render('SD_Text_TextType_Delivery_TextType2_New')
})
app.get("/SD_Text_TextType_Financial_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Financial_TextType1')
})
app.get("/SD_Text_TextType_Financial_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Financial_TextType1_New')
})

app.get("/SD_Text_TextType_Info_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Info_TextType1')
})
app.get("/SD_Text_TextType_Info_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Info_TextType1_New')
})
app.get("/SD_Text_TextType_Legal_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Legal_TextType1')
})
app.get("/SD_Text_TextType_Legal_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Legal_TextType1_New')
})

app.get("/SD_Text_TextType_Pricing_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Pricing_TextType1')
})
app.get("/SD_Text_TextType_Pricing_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Pricing_TextType1_New')
})
app.get("/SD_Text_TextType_Pricing_TextType2", (req, res) => {
  res.render('SD_Text_TextType_Pricing_TextType2')
})
app.get("/SD_Text_TextType_Pricing_TextType2_New", (req, res) => {
  res.render('SD_Text_TextType_Pricing_TextType2_New')
})

app.get("/SD_Text_TextType_SalesAct_TextType1", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_TextType1')
})
app.get("/SD_Text_TextType_SalesAct_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_SalesAct_TextType1_New')
})
app.get("/SD_Text_TextType_SalesDoc_TextType1", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_TextType1')
})
app.get("/SD_Text_TextType_SalesDoc_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_TextType1_New')
})

app.get("/SD_Text_TextType_SalesDoc_TextType2", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_TextType2')
})
app.get("/SD_Text_TextType_SalesDoc_TextType2_New", (req, res) => {
  res.render('SD_Text_TextType_SalesDoc_TextType2_New')
})
app.get("/SD_Text_TextType_Shipment_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Shipment_TextType1')
})
app.get("/SD_Text_TextType_Shipment_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Shipment_TextType1_New')
})

app.get("/SD_Text_TextType_Trading_TextType1", (req, res) => {
  res.render('SD_Text_TextType_Trading_TextType1')
})
app.get("/SD_Text_TextType_Trading_TextType1_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_TextType1_New')
})
app.get("/SD_Text_TextType_Trading_TextType2", (req, res) => {
  res.render('SD_Text_TextType_Trading_TextType2')
})
app.get("/SD_Text_TextType_Trading_TextType2_New", (req, res) => {
  res.render('SD_Text_TextType_Trading_TextType2_New')
})


// text determination sd
// text type
app.get("/SD_Text_TextType", (req, res) => {
  res.render('SD_Text_TextType')
})

// access
app.get("/SD_Text_Access", (req, res) => {
  res.render('SD_Text_Access')
})



// routes
app.get("/SD_DefineRoutes", (req, res) => {
  res.render('SD_DefineRoutes')
})
app.get("/SD_DefineRoute_Transport", (req, res) => {
  res.render('SD_DefineRoute_Transport')
})
app.get("/SD_DefineRoute_Transport_New", (req, res) => {
  res.render('SD_DefineRoute_Transport_New')
})
app.get("/SD_DefineRoute_Shipping", (req, res) => {
  res.render('SD_DefineRoute_Shipping')
})
app.get("/SD_DefineRoute_Shipping_New", (req, res) => {
  res.render('SD_DefineRoute_Shipping_New')
})
app.get("/SD_DefineRoute_Connection", (req, res) => {
  res.render('SD_DefineRoute_Connection')
})
app.get("/SD_DefineRoute_Connection_New", (req, res) => {
  res.render('SD_DefineRoute_Connection_New')
})
app.get("/SD_DefineRoute_Stage", (req, res) => {
  res.render('SD_DefineRoute_Stage')
})
app.get("/SD_DefineRoute_Stage_New", (req, res) => {
  res.render('SD_DefineRoute_Stage_New')
})

app.get("/SD_RouteDet", (req, res) => {
  res.render('SD_RouteDet')
})
app.get("/SD_RouteDet_Transport", (req, res) => {
  res.render('SD_RouteDet_Transport')
})
app.get("/SD_RouteDet_Transport_New", (req, res) => {
  res.render('SD_RouteDet_Transport_New')
})
app.get("/SD_RouteDet_Shipping", (req, res) => {
  res.render('SD_RouteDet_Shipping')
})
app.get("/SD_RouteDet_Transportation", (req, res) => {
  res.render('SD_RouteDet_Transportation')
})
app.get("/SD_RouteDet_Transportation_New", (req, res) => {
  res.render('SD_RouteDet_Transportation_New')
})

app.get("/SD_RouteDet_WeightGrp", (req, res) => {
  res.render('SD_RouteDet_WeightGrp')
})
app.get("/SD_RouteDet_Weightgrp_New", (req, res) => {
  res.render('SD_RouteDet_Weightgrp_New')
})
app.get("/SD_RouteDet_Weightgrp_Detail", (req, res) => {
  res.render('SD_RouteDet_Weightgrp_Detail')
})
app.get("/SD_RouteDet_Weightgrp_Detail_New", (req, res) => {
  res.render('SD_RouteDet_Weightgrp_Detail_New')
})

app.get("/SD_RouteDet_Determination", (req, res) => {
  res.render('SD_RouteDet_Determination')
})
app.get("/SD_RouteDet_Determination_New", (req, res) => {
  res.render('SD_RouteDet_Determination_New')
})
app.get("/SD_RouteDet_Determination_Order", (req, res) => {
  res.render('SD_RouteDet_Determination_Order')
})
app.get("/SD_RouteDet_Determination_Order_New", (req, res) => {
  res.render('SD_RouteDet_Determination_Order_New')
})

app.get("/SD_RouteDet_Determination_Delivery", (req, res) => {
  res.render('SD_RouteDet_Determination_Delivery')
})
app.get("/SD_RouteDet_Determination_Delivery_New", (req, res) => {
  res.render('SD_RouteDet_Determination_Delivery_New')
})







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
