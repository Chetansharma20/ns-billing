import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

// Hardcoded Shop Details
// Hardcoded Shop Details
const SHOP_DETAILS = {
    name: "NS MOTORS",
    address: "SERVE NO 208/9, SHOP NO 1, SHRIRAM NAGAR, YEOLA ROAD, Chamunda Steel Traders, Vidya Nagar, Kopargaon Ahilyanagar, Maharashtra, 423601",
    mobile: "+91 80554 43533",
    gstin: "27AKNPW2296B1ZR",
    hsn: "87116010",
    email: "nikhilwakode2006@gmail.com"
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f8fafc',
        padding: 20,
        fontSize: 10,
    },
    // Header Section
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: '#1e293b',
        paddingBottom: 8,
        marginBottom: 10,
    },
    logoContainer: {
        width: 80,
    },
    logo: {
        width: 70,
        height: 70,
        objectFit: 'contain',
    },
    shopDetails: {
        flex: 1,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    shopName: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Times-Roman',
        color: '#1e40af',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    shopAddress: {
        fontSize: 9,
        color: '#374151',
        marginBottom: 2,
    },
    shopGst: {
        fontSize: 8,
        color: '#374151',
    },
    invoiceDetails: {
        width: 120,
        textAlign: 'right',
    },
    invoiceText: {
        fontSize: 9,
        color: '#374151',
        marginBottom: 2,
    },
    boldText: {
        fontWeight: 700,
    },
    // Customer Section
    customerSection: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d1d5db',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: '#111827',
        borderBottomWidth: 1,
        borderBottomColor: '#1f2937',
        paddingBottom: 4,
        marginBottom: 8,
        textTransform: 'uppercase',
    },
    customerGrid: {
        flexDirection: 'row',
    },
    customerCol: {
        flex: 1,
    },
    customerRow: {
        fontSize: 9,
        marginBottom: 3,
        color: '#374151',
    },
    // Table Section
    table: {
        marginBottom: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#e2e8f0',
        borderWidth: 2,
        borderColor: '#1e293b',
    },
    tableHeaderCell: {
        padding: 6,
        fontWeight: 'bold',
        fontSize: 9,
        color: '#0f172a',
        borderRightWidth: 1,
        borderRightColor: '#1e293b',
    },
    tableRow: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#4b5563',
    },
    tableCell: {
        padding: 6,
        fontSize: 9,
        borderRightWidth: 1,
        borderRightColor: '#4b5563',
    },
    tableCellSr: { width: '6%', textAlign: 'center' },
    tableCellDesc: { width: '34%' },
    tableCellHsn: { width: '12%', textAlign: 'center' },
    tableCellQty: { width: '8%', textAlign: 'center' },
    tableCellRate: { width: '20%', textAlign: 'right' },
    tableCellAmount: { width: '20%', textAlign: 'right', borderRightWidth: 0 },
    // Footer rows
    footerRow: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#4b5563',
    },
    footerLabel: {
        width: '80%',
        padding: 6,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 9,
        borderRightWidth: 1,
        borderRightColor: '#4b5563',
    },
    footerValue: {
        width: '20%',
        padding: 6,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 9,
    },
    totalRow: {
        flexDirection: 'row',
        backgroundColor: '#e2e8f0',
        borderWidth: 2,
        borderColor: '#1e293b',
    },
    totalLabel: {
        width: '80%',
        padding: 8,
        textAlign: 'right',
        fontSize: 11,
        borderRightWidth: 1,
        borderRightColor: '#1e293b',
        fontWeight: 'bold',
    },
    totalValue: {
        width: '20%',
        padding: 8,
        textAlign: 'right',
        fontSize: 11,
        fontWeight: 'bold',
    },
    wordsRow: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: '#1f2937',
        padding: 6,
    },
    wordsText: {
        fontSize: 8,
        textTransform: 'uppercase',
        fontStyle: 'italic',
    },
    gstNote: {
        fontSize: 8,
        color: '#4b5563',
        fontStyle: 'italic',
        marginTop: 4,
    },
    // Terms Section
    termsSection: {
        borderTopWidth: 3,
        borderTopColor: '#1f2937',
        paddingTop: 10,
        marginTop: 10,
    },
    termsTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#111827',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    termItem: {
        fontSize: 8,
        color: '#374151',
        marginBottom: 3,
    },
    // Signatures
    signaturesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    signatureBox: {
        width: 150,
    },
    signatureLine: {
        borderBottomWidth: 1,
        borderBottomStyle: 'dashed',
        borderBottomColor: '#4b5563',
        height: 40,
        marginBottom: 4,
    },
    signatureLabel: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#111827',
    },
    signatureSubLabel: {
        fontSize: 8,
        color: '#4b5563',
    },
    footer: {
        textAlign: 'center',
        fontSize: 8,
        color: '#6b7280',
        fontStyle: 'italic',
        marginTop: 15,
    },

    vehicleDetails: {
        marginTop: 6,
        fontSize: 8,
        color: '#374151',
    },
    vehicleRow: {
        marginBottom: 2,
    },
    whatsappContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    whatsappIcon: {
        width: 10,
        height: 10,
        marginRight: 3,
    },
});

const numberToWords = (num) => {
    const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convert = (n) => {
        if (n === 0) return '';
        if (n < 20) return a[n];
        if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '');
        if (n < 1000) return a[Math.floor(n / 100)] + 'Hundred ' + (n % 100 !== 0 ? convert(n % 100) : '');
        if (n < 100000) return convert(Math.floor(n / 1000)) + 'Thousand ' + (n % 1000 !== 0 ? ' ' + convert(n % 1000) : '');
        if (n < 10000000) return convert(Math.floor(n / 100000)) + 'Lakh ' + (n % 100000 !== 0 ? ' ' + convert(n % 100000) : '');
        return convert(Math.floor(n / 10000000)) + 'Crore ' + (n % 10000000 !== 0 ? ' ' + convert(n % 10000000) : '');
    };

    const whole = Math.floor(num);
    const fraction = Math.round((num - whole) * 100);

    if (whole === 0 && fraction === 0) return 'Zero Rupees Only';

    let res = '';
    if (whole > 0) {
        res = convert(whole) + 'Rupees ';
    }
    if (fraction > 0) {
        res += (whole > 0 ? 'and ' : '') + convert(fraction) + 'Paise ';
    }
    return res + 'Only';
};

const formatCurrency = (num) => {
    try {
        if (num === undefined || num === null) return "0.00";
        return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
    } catch (e) {
        return (num || 0).toFixed(2);
    }
};

const InvoicePDF = ({ data, logoBase64, whatsappBase64, type = "billing" }) => {
    const isQuotation = type === "quotation";
    const numberLabel = isQuotation ? "Quotation No" : "Invoice No";
    const docTitle = isQuotation ? "QUOTATION" : "TAX INVOICE";

    const {
        customerName,
        mobileNumber,
        address,
        customerGst,
        vehicleModel,
        chassisNo,
        motorNo,
        batteryNo,
        chargerNo,
        color,
        price,
        cashAmount,
        onlineAmount,
        chequeAmount,
        monthlyEmi,
        financeTenure,
        financerName,
        gstType = 'cgst_sgst',
        date,
        invoiceNumber
    } = data || {};

    const formattedDate = date ? new Date(date).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }) : '';

    const finalAmount = parseFloat(price) || 0;
    const basePrice = finalAmount / 1.05;
    let cgst = 0, sgst = 0, igst = 0;

    if (gstType === 'cgst_sgst') {
        cgst = basePrice * 0.025;
        sgst = basePrice * 0.025;
    } else {
        igst = basePrice * 0.05;
    }

    const totalGst = cgst + sgst + igst;
    const totalAmount = finalAmount;

    // Derived Financials
    const downPayment = (parseFloat(cashAmount) || 0) + (parseFloat(onlineAmount) || 0) + (parseFloat(chequeAmount) || 0);
    const financedAmount = Math.max(0, totalAmount - downPayment);
    const isFinanced = parseFloat(monthlyEmi) > 0 && parseFloat(financeTenure) > 0;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        {logoBase64 && <Image style={styles.logo} src={logoBase64} />}
                    </View>

                    {/* Shop Details */}
                    <View style={styles.shopDetails}>
                        <Text style={styles.shopName}>{SHOP_DETAILS.name}</Text>
                        <Text style={styles.shopAddress}>{SHOP_DETAILS.address}</Text>
                        <Text style={styles.shopGst}>
                            <Text style={styles.boldText}>GSTIN: </Text>{SHOP_DETAILS.gstin}
                        </Text>
                    </View>

                    {/* Invoice Details */}
                    <View style={styles.invoiceDetails}>
                        <Text style={styles.invoiceText}>
                            <Text style={styles.boldText}>Date: </Text>{formattedDate}
                        </Text>
                        <Text style={styles.invoiceText}>
                            <Text style={styles.boldText}>{numberLabel}: </Text>{invoiceNumber}
                        </Text>
                        <Text style={styles.invoiceText}>Pro Nikhil Manoj wakode</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -2 }}>
                            <View style={{ marginRight: 5, justifyContent: 'center', marginTop: 2 }}>
                                {whatsappBase64 && <Image style={{ width: 10, height: 9 }} src={whatsappBase64} />}
                            </View>
                            <View style={{ paddingTop: 3 }}>
                                <Text style={{ fontSize: 10, color: '#374151' }}>{SHOP_DETAILS.mobile}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Customer Details */}
                <View style={styles.customerSection}>
                    <Text style={styles.sectionTitle}>Details of Customer</Text>
                    <View style={styles.customerGrid}>
                        <View style={styles.customerCol}>
                            <Text style={styles.customerRow}>
                                <Text style={styles.boldText}>Name: </Text>{customerName}
                            </Text>
                            <Text style={styles.customerRow}>
                                <Text style={styles.boldText}>Mobile: </Text>{mobileNumber}
                            </Text>
                            {customerGst && (
                                <Text style={styles.customerRow}>
                                    <Text style={styles.boldText}>GSTIN: </Text>{customerGst.toUpperCase()}
                                </Text>
                            )}
                        </View>
                        <View style={styles.customerCol}>
                            <Text style={styles.customerRow}>
                                <Text style={styles.boldText}>Address: </Text>{address}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Product Table */}
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderCell, styles.tableCellSr]}>Sr.</Text>
                        <Text style={[styles.tableHeaderCell, styles.tableCellDesc]}>Description of Goods</Text>
                        <Text style={[styles.tableHeaderCell, styles.tableCellHsn]}>HSN Code</Text>
                        <Text style={[styles.tableHeaderCell, styles.tableCellQty]}>Qty</Text>
                        <Text style={[styles.tableHeaderCell, styles.tableCellRate]}>Rate (Rs.)</Text>
                        <Text style={[styles.tableHeaderCell, styles.tableCellAmount, { borderRightWidth: 0 }]}>Amount (Rs.)</Text>
                    </View>

                    {/* Table Body */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellSr]}>1</Text>
                        <View style={[styles.tableCell, styles.tableCellDesc]}>
                            <Text style={styles.boldText}>
                                {vehicleModel?.toUpperCase()} - {color?.charAt(0).toUpperCase() + color?.slice(1).toLowerCase()}
                            </Text>
                            <Text style={{ fontSize: 8, color: '#4b5563', fontStyle: 'italic', marginTop: 2 }}>
                                Electric Scooter (Low-Speed) Two-Wheeler
                            </Text>
                            <View style={styles.vehicleDetails}>
                                {chassisNo && <Text style={styles.vehicleRow}><Text style={styles.boldText}>Chassis No: </Text>{chassisNo}</Text>}
                                {motorNo && <Text style={styles.vehicleRow}><Text style={styles.boldText}>Motor No: </Text>{motorNo}</Text>}
                                {batteryNo && <Text style={styles.vehicleRow}><Text style={styles.boldText}>Battery No: </Text>{batteryNo}</Text>}
                                {chargerNo && <Text style={styles.vehicleRow}><Text style={styles.boldText}>Charger No: </Text>{chargerNo}</Text>}
                            </View>
                        </View>
                        <Text style={[styles.tableCell, styles.tableCellHsn]}>{SHOP_DETAILS.hsn}</Text>
                        <Text style={[styles.tableCell, styles.tableCellQty]}>1</Text>
                        <Text style={[styles.tableCell, styles.tableCellRate]}>{formatCurrency(basePrice)}</Text>
                        <Text style={[styles.tableCell, styles.tableCellAmount]}>{formatCurrency(basePrice)}</Text>
                    </View>

                    {/* Taxable Amount */}
                    <View style={styles.footerRow}>
                        <Text style={styles.footerLabel}>Taxable Amount (Rs.)</Text>
                        <Text style={styles.footerValue}>{formatCurrency(basePrice)}</Text>
                    </View>

                    {/* GST Rows */}
                    {gstType === 'cgst_sgst' ? (
                        <>
                            <View style={styles.footerRow}>
                                <Text style={styles.footerLabel}>CGST @ 2.5% (Rs.)</Text>
                                <Text style={styles.footerValue}>{formatCurrency(cgst)}</Text>
                            </View>
                            <View style={styles.footerRow}>
                                <Text style={styles.footerLabel}>SGST @ 2.5% (Rs.)</Text>
                                <Text style={styles.footerValue}>{formatCurrency(sgst)}</Text>
                            </View>
                        </>
                    ) : (
                        <View style={styles.footerRow}>
                            <Text style={styles.footerLabel}>IGST @ 5% (Rs.)</Text>
                            <Text style={styles.footerValue}>{formatCurrency(igst)}</Text>
                        </View>
                    )}

                    {/* Total */}
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total Amount (Rs.)</Text>
                        <Text style={styles.totalValue}>{formatCurrency(totalAmount)}</Text>
                    </View>

                    {/* Payment Breakdown - Show if any payment exists */}
                    {(
                        (cashAmount !== "" && parseFloat(cashAmount) > 0) ||
                        (onlineAmount !== "" && parseFloat(onlineAmount) > 0) ||
                        (chequeAmount !== "" && parseFloat(chequeAmount) > 0)
                    ) && (
                            <View style={{ marginTop: 5, padding: 5, backgroundColor: '#f9fafb', borderWidth: 1, borderColor: '#d1d5db', borderStyle: 'solid' }}>
                                {cashAmount !== "" && parseFloat(cashAmount) > 0 && (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Text style={{ fontSize: 9, fontWeight: 'bold' }}>CASH PAYMENT:</Text>
                                        <Text style={{ fontSize: 9 }}>Rs. {formatCurrency(parseFloat(cashAmount) || 0)}</Text>
                                    </View>
                                )}
                                {onlineAmount !== "" && parseFloat(onlineAmount) > 0 && (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Text style={{ fontSize: 9, fontWeight: 'bold' }}>ONLINE PAYMENT:</Text>
                                        <Text style={{ fontSize: 9 }}>Rs. {formatCurrency(parseFloat(onlineAmount) || 0)}</Text>
                                    </View>
                                )}
                                {chequeAmount !== "" && parseFloat(chequeAmount) > 0 && (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Text style={{ fontSize: 9, fontWeight: 'bold' }}>CHEQUE PAYMENT:</Text>
                                        <Text style={{ fontSize: 9 }}>Rs. {formatCurrency(parseFloat(chequeAmount) || 0)}</Text>
                                    </View>
                                )}

                                {isFinanced && (
                                    <>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#d1d5db', borderTopStyle: 'dotted', paddingTop: 2, marginTop: 2 }}>
                                            <Text style={{ fontSize: 9, fontWeight: 'bold' }}>TOTAL DOWN PAYMENT:</Text>
                                            <Text style={{ fontSize: 9 }}>Rs. {formatCurrency(downPayment)}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
                                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#1e40af' }}>FINANCED / REMAINING:</Text>
                                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#1e40af' }}>Rs. {formatCurrency(financedAmount)}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 1 }}>
                                            <Text style={{ fontSize: 9 }}>EMI Details: {monthlyEmi} x {financeTenure} Months</Text>
                                            <Text style={{ fontSize: 9 }}>{financerName ? `(${financerName.toUpperCase()})` : ''}</Text>
                                        </View>
                                    </>
                                )}
                            </View>
                        )}

                    {/* Amount in Words */}
                    <View style={styles.wordsRow}>
                        <Text style={styles.wordsText}>
                            <Text style={styles.boldText}>Total Amount in Words: </Text>
                            {numberToWords(totalAmount)}
                        </Text>
                    </View>
                </View>

                <Text style={styles.gstNote}>* GST calculated as per selected type.</Text>

                {/* Terms & Conditions */}
                <View style={styles.termsSection}>
                    <Text style={styles.termsTitle}>Terms & Conditions:</Text>
                    <Text style={styles.termItem}>1. Goods once sold will not be taken back.</Text>
                    <Text style={styles.termItem}>2. Motor and controller carry a warranty of 2 years.</Text>
                    <Text style={styles.termItem}>3. Battery and charger carry a warranty of 1 year.</Text>
                    <Text style={styles.termItem}>4. No warranty is provided for physical damage or breakage.</Text>
                </View>

                {/* Signatures */}
                <View style={styles.signaturesContainer}>
                    <View style={styles.signatureBox}>
                        <View style={styles.signatureLine}></View>
                        <Text style={styles.signatureLabel}>Customer Signature</Text>
                        <Text style={styles.signatureSubLabel}>Date: {formattedDate}</Text>
                    </View>
                    <View style={[styles.signatureBox, { alignItems: 'flex-end' }]}>
                        <View style={styles.signatureLine}></View>
                        <Text style={styles.signatureLabel}>Authorized Signatory</Text>
                        <Text style={styles.signatureSubLabel}>{SHOP_DETAILS.name}</Text>
                        <Text style={styles.signatureSubLabel}>(Pro. Nikhil Manoj wakode)</Text>
                    </View>
                </View>


            </Page>
        </Document>
    );
};

export default InvoicePDF;
