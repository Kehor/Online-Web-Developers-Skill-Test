
const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const FormComponent = class {
  constructor() {

  }
  start() {
    // Start modifying the form elements here!
    // You are allowed to add extra methods, properties or change the constructor of this class   
    var oppoSelect = document.getElementsByName("status")[0];
    oppoStatus.forEach(oppoStatu => {
      var opt = document.createElement("option");
      opt.value = oppoStatu.K_OPPO_STATUS;
      opt.text = oppoStatu.STATUS;
      oppoSelect.add(opt);
    });

    document.getElementsByName("success")[0].value = oppoSelect.value;
    oppoSelect.onchange = function(){
      document.getElementsByName("success")[0].value = oppoSelect.value;
    };
       
  }

  response(url) {
    var output = document.getElementsByClassName("output")[0];
    var getStatus = parseInt(url.searchParams.get("status"));
    var getSuccess = parseInt(url.searchParams.get("success"));
    var responseArray = {status: getStatus, success: getSuccess}
    output.innerHTML = JSON.stringify(responseArray);
  }
  
}

const fc = new FormComponent();
var url = new URL(window.location.href);
fc.start();
if(url.searchParams.get("status") != null){
  fc.response(url)
}
