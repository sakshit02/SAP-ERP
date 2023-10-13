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
app.get("/AccessTable", (req, res) => {
  res.render('AccessTable')
})
app.get("/AccessFields", (req, res) => {
  res.render('AccessFields')
})
app.get("/ConditionTypes", (req, res) => {
  res.render('ConditionTypes')
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
