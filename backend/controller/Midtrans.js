import midtransClient from 'midtrans-client';
import Mpembayaran from '../models/pembayaranModel.js';
export const getDataMidtrans = (req, res) => {        
    // Create Core API instance
    let coreApi = new midtransClient.CoreApi({
        isProduction: false,
        // sandbox
        serverKey: 'SB-Mid-server-uw12eOHH7Kz68dLi4ZVBr1-R',
        clientKey: 'SB-Mid-client-bzpYL188Mpzxr6fa'
        // midtrans
        // serverKey : 'Mid-server-BPuFkPX9yHxLv-cwTKEPXfuV',
        // clientKey: 'Mid-client-bunQt9yGqx1tdhKw',
    });

    var date = new Date();
    var orderId = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + '-' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds();

    var getData = req.body;
    var data = {
        nim: getData.nim,
        metode: getData.metode,
        jenis: getData.jenis
    };


    console.log(data);

    let bank_transfer = {
        "payment_type": "bank_transfer",
        "transaction_details": {
            "gross_amount": 2000,
            "order_id": orderId
        },
        "customer_details": {
            "first_name": "sanusi",
            "phone": "+6281 1234 1234",
            "nim": data.nim 
        },
        "item_details": [
            {
                "id": "1388998298204",
                "price": 2000,
                "quantity": 1,
                "name": "Pembayaran Semester"
            },
        ],
        "bank_transfer": {
            "bank": data.jenis,
        }
    };


    let cstore = {
        "payment_type": "cstore",
        "transaction_details": {
            "gross_amount": 1000,
            "order_id": orderId
        },
        "cstore": {
            "store": data.jenis,
            "message": "Tiket1 transaction"
        },
        "customer_details": {
            "first_name": "Budi",
            "last_name": "Utomo",
            "email": "budi.utomo@midtrans.com",
            "phone": "0811223344",
            "nim": data.nim
        },
        "item_details": [
            {
                "id": "id1",
                "price": 1000,
                "quantity": 1,
                "name": "tiket1"
            }
        ]
    }

    let shopeePay =
    {
        "payment_type": "shopeepay",
        "transaction_details": {
            "order_id": orderId,
            "gross_amount": 25000
        },
        "item_details": [
            {
                "id": "id1",
                "price": 25000,
                "quantity": 1,
                "name": "Brown sugar boba milk tea"
            }
        ],
        "customer_details": {
            "first_name": "John",
            "last_name": "Brandon",
            "email": "john.brandon@go-jek.com",
            "phone": "0819323212312"
        },
        "shopeepay": {
            "callback_url": "https://midtrans.com/"
        }
    }

    if (data.metode == 'cstore') {
        coreApi.charge(cstore).then((chargeResponse) => {
            console.log('chargeResponse:', chargeResponse);
            res.send({
                "status": chargeResponse.status_code,
                "order_id": chargeResponse.order_id,
                "payment_code": chargeResponse.payment_code,
                "amount": chargeResponse.gross_amount,
                "time": chargeResponse.transaction_time,
                "payment_type": chargeResponse.store
            })
        });
    }
    if (data.metode == 'e-money') {
        coreApi.charge(shopeePay).then((chargeResponse) => {
            console.log('chargeResponse:', chargeResponse);
        });
    }
    if (data.metode == 'bank_transfer') {
        try {
            coreApi.charge(bank_transfer)
                .then((chargeResponse) => {
                    console.log(chargeResponse)
                    res.send({
                        "status": chargeResponse.status_code,
                        "order_id": chargeResponse.order_id,
                        "payment_code": chargeResponse.va_numbers[0].va_number,
                        "amount": chargeResponse.gross_amount,
                        "time": chargeResponse.transaction_time,
                        "payment_type": chargeResponse.va_numbers[0].bank
                    })
                })
        } catch (e) {
            console.log(e)
        }
    }

}