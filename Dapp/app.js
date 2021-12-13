console.log("Hello")
let accounts = [];
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}
$(".enableEthereumButton").click(function() {
    alert("启动狐狸钱包中")
        // ethereum.request({ method: 'eth_requestAccounts' });
    getAccount();
})
async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    // showAccount.innerHTML = account;
    nu = account;
    console.log(accounts)
    $(".showAccount").html(account)
}
// const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7850");
var contractabi = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "returnMoney",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_addtime",
                "type": "uint256"
            }
        ],
        "name": "AddTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_category",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_startPrice",
                "type": "uint256"
            }
        ],
        "name": "addProductToStore",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "break_promise",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "defaultaddress",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }],
        "name": "getBalance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "getMoney",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNewInformation",
        "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
        }],
        "name": "getProduct",
        "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "highestBidderInfo",
        "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "owerbreak_promise",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "productIndex",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "queryBalance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "setAuctionEnd",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_timeLimit",
                "type": "uint256"
            }
        ],
        "name": "setAuctionStart",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "showProductstatus",
        "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "timeRemaining",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "tobid",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "totalBid",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalBidders",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];

var contract = new web3.eth.Contract(contractabi, "0x543F5f6035E6c6De19Eb32977519356Aca1e0AD1");
console.log(contract);
//1.添加商品
$(".sure_add").click(function() {
    let _name = $("#name").val();
    let _category = $("#category").val();
    let _price = $("#price").val();
    // console.log("name=>", _name)
    // console.log("category=>", _category)
    // console.log("price=>", _price)
    contract.methods.addProductToStore(_name, _category, _price).send({ from: accounts[0] }).then(
        function(result) {
            console.log("addresult=>", result)
            if (result.status == true) {
                alert("添加成功")
            }
        }
    )
});


//2.设置商品开始（传入商品的id和商品拍卖时间） 
$(".setProductStartbut").click(function() {
    //获取id
    let _setProductStartid = $("#setProductStartid").val();
    //获取时间
    let _setProductStarttimeLimit = $("#setProductStarttimeLimit").val();
    console.log("setProductStartid=>", _setProductStartid)
    console.log("setProductStarttimeLimit=>", _setProductStarttimeLimit)
    contract.methods.setAuctionStart(_setProductStartid, _setProductStarttimeLimit).send({ from: accounts[0] }).then(
        function(receipt) {
            // console.log(receipt)==>true
            if (receipt == true) {
                alert("设置开始成功...您可以开始拍卖了^v^")
            }
        });
});
//3.查询指定商品的状态
$(".getProductStatus").click(function() {
    //获取id
    let _getProductStatusid = $("#getProductStatusid").val();
    // console.log("getProductStatusid=>", _getProductStatusid)
    contract.methods.showProductstatus(_getProductStatusid).call().then(
        function(receipt) {
            // console.log("addresult=>", receipt)
            console.log(receipt)
            $("#ShowProductid").html(receipt[0].toString());
            $("#ShowProductStatus").html(receipt[1].toString());
        });
});

//4.显示商品信息
$(".getproductinfo").click(function() {
    let id = $("#getproductinfoid").val();
    console.log("getproductinfoid=>", id)
    contract.methods.getProduct(id).call().then(
        function(receipt) {
            console.log("receipt=>", receipt)
            $("#getproductinfoitemid").html(receipt[0]);
            $("#getproductinfoitemname").html(receipt[1]);
            $("#getproductinfoitemcategory").html(receipt[2]);
            $("#getproductinfoitemstartPrice").html(receipt[3]);
            $("#getproductinfoitemower").html(receipt[4]);
            $("#getproductinfoitemstatus").html(receipt[5].toString());

        });

});
// 5.进行出价（ 拍卖）
$(".to_bid").click(function() {
    let _to_bidid = $("#to_bidid").val();
    let _to_bidvalue = $("#to_bidvalue").val();
    console.log("giveaddress=>", _to_bidid)
    console.log("giveaddress=>", _to_bidvalue)
    let prices = (Number(_to_bidvalue)).toString(16);
    console.log(prices);
    let prices1 = '0x' + prices;
    //let prices = _to_bidvalue;
    contract.methods.tobid(_to_bidid).send({ from: accounts[0], value: prices1, }).then(
        function(receipt) {
            console.log("receipt=>", receipt)
        });
});
// //6.设置商品拍卖结束
// $(".tosetbid_end").click(function() {
//     let _tosetbid_endid = $("#tosetbid_endid").val();
//     console.log("tosetbid_endid=>", _tosetbid_endid)
//     contract.methods.setAuctionEnd(_tosetbid_endid).send({ from: accounts[0] })
//         .on('transactionHash', function(hash) {
//             console.log("transactionHash=>", hash)
//                 // if (hash != null) {
//                 //     alter("设置成功！")
//                 // }
//                 // if (receipt.status == true) {
//                 //     alter("设置成功！")
//                 // }
//         })
//         .on('receipt', function(receipt) {
//             console.log("receipt=>", receipt)
//         })
//         .on('confirmation', function(confirmationNumber, receipt) {
//             console.log("confirmation=>", confirmationNumber, "receipt=>", receipt)
//         })
//         .on('error', function(error, receipt) {
//             console.log("error=>", error, "receipt=>", receipt)
//         });

// });
//7.查询当前账户余额和地址
$(".search_current_balance").click(function() {
    contract.methods.getNewInformation().call({ from: accounts[0] }).then(
        function(receipt) {
            console.log("receipt=>", receipt)
            $("#search_current_address").html(receipt[0]);
            $("#search_current_address_balance").html(receipt[1].toString());
        });
});
//8.查询当前合约内余额
$(".search_currentcontract_balance").click(function() {
    contract.methods.queryBalance().call().then(
        function(receipt) {
            console.log("receipt=>", receipt)
            $("#search_contractcurrent_address_balance").html(receipt);
        });
});
//9.查询指定账户余额
$(".getBalance_give").click(function() {
    let _giveaddress = $("#giveaddress").val();
    contract.methods.getBalance(_giveaddress).call().then(
        function(receipt) {
            console.log("receipt=>", receipt)
            $("#Designated_account_balance").html(receipt);
        });
});
//10.查询距离结束还有多长时间
$(".getrest_time").click(function() {
    let _thereainingend_id = $("#thereainingend_id").val();
    contract.methods.timeRemaining(_thereainingend_id).call().then(
        function(receipt) {
            console.log("receipt=>", receipt)
            $("#the_rest_time").html(receipt);
        });
});
//11.延长拍卖时间
$(".addbidtime").click(function() {
    let _addbidtimeid = $("#addbidtimeid").val();
    let _addbidtime_addTime = $("#addbidtime_addTime").val();
    contract.methods.AddTime(_addbidtimeid, _addbidtime_addTime).send({ from: accounts[0] }).then(
        function(receipt) {
            console.log("receipt=>", receipt)
            if (receipt == true) {
                alert("设置开始成功...您可以开始拍卖了^v^")
            }
        });
});
//结束拍卖
$(".endbidtime").click(function() {
    let _endbidtimeid = $("#endbidtimeid").val();
    contract.methods.setAuctionEnd(_endbidtimeid).send({ from: accounts[0] }).then(
        function(receipt) {
            console.log("receipt=>", receipt)
            if (receipt.status == true) {
                alert("拍卖结束^v^")
            }
        });
});



//获取最高出价者信息
$(".height_bidinfo").click(function() {
    let _height_bidinfoid = $("#height_bidinfoid").val();
    contract.methods.highestBidderInfo(_height_bidinfoid).call().then(
        function(receipt) {
            console.log("receipt22=>", receipt);
            $("#height_bidinfoaddress").html(receipt[0]);
            $("#height_bidinfodvalue").html(receipt[1]);
        });
});

//12.获取目前最高出价多少
$(".height_bid").click(function() {
    let _height_bidid = $("#height_bidid").val();
    contract.methods.getMoney(_height_bidid).call().then(
        function(receipt) {
            console.log("receipt22=>", receipt);
            $("#height_bidvalue").html(receipt);
        });
});

//获取商品数量
$(".Producttotal").click(function() {
    contract.methods.productIndex().call().then(
        function(receipt) {
            console.log("receipt22=>", receipt);
            $("#ProducttotalNum").html(receipt);
        });
});


//当前商品被出价次数
$(".product_abducted").click(function() {
    contract.methods.totalBidders().call().then(
        function(receipt) {
            console.log("receipt22=>", receipt);
            $("#Proproduct_abductedNum").html(receipt);
        });
});
//商品的拥有者不想搞了，违约
$(".owerbreak_promisesure").click(function() {
    let _owerbreak_promisesureid = $("#owerbreak_promisesureid").val();
    contract.methods.owerbreak_promise(_owerbreak_promisesureid).call().then(
        function(receipt) {
            console.log("receipt22=>", receipt);
        });
});



//出价者不想出价了(违约)
$(".bidbreak_promisesure").click(function() {
    let _bidbreak_promisesureid = $("#_bidbreak_promisesureid").val();

    contract.methods.break_promise(_bidbreak_promisesureid).call().then(
        function(receipt) {
            console.log("receipt22=>", receipt);
        });
});