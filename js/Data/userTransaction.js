const userTransaction = JSON.parse(localStorage.getItem("transactions"));
const user = JSON.parse(localStorage.getItem("User"));


function generateCountDown() {
    var now = new Date().getDate()

    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    var seconds  = Math.floor((now % (1000 * 60)) / 1000);

    return minutes + "m" + seconds + "s";
}


const contractTransactionList = document.querySelector(".dataUserTransaction");
const UserProfile = document.querySelector(".contract-user");

//CARD
const userTransactionHistory = userTransaction.map((transaction, i) => {
    return `<div class="col-12 col-md-6 col-lg-4 item explore-item" 
            data-groups='["ongoing","ended"]'
            >
            <div class="card project-card">
              <div class="media">
                <a href="project-details.html">
                  <img src="assets/img/content/thumb_${i + 1}.png" alt=""
                  class="card-img-top avatar-max-lg"
                  />
                </a>

                <div class="media-body ml-4">
                  <a href="project-details.html">
                    <h4 class="m-0">#tbCoders</h4>
                  </a>
                  <div class="countdown-times">
                    <h6 class="my-2">Transaction NO: ${i + 1}</h6>

                    <div 
                    class="countdown d-flex" 
                    data-data="2022-06-30"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="items">
                  <div  class="single-item">
                    <span>
                    ${transaction.token / 10 ** 18 ? "Amount" : "Claim Token"}
                    </span>
                    <span>${transaction.token / 10 ** 18 || ""}</span>
                  </div>
                  <div  class="single-item">
                    <span>Gas</span>
                    <span>${transaction.gasUsed}</span>
                  </div>
                  <div  class="single-item">
                    <span>Status</span>
                    <span>${transaction.status}</span>
                  </div>
                </div>
              </div>

              <div class="project-footer d-flex align-items-center mt-4 mt-md-5">
                <a target="_blank"
                class="btn btn-bordered-white btn-smaller"
                href="https://polygonscan.com/tx/${transaction.transactionHash}"
                >
                Transaction
              </a>

              <div class="social-share ml-auto">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-globe"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>
                </ul>
              </div>
              </div>

              <div class="blockchain-icon">
                <img src="assets/img/content/ethereum.png" alt="">
              </div>
            </div>
          </div>
    
    
    
    `
});


//USER 
const userProfileHTML = `
<div class="contract-user-profile">
              <img src="assets/img/content/team_1.png" alt=""/>
              <div class="contract-user-profile-info">
                <p><strong>Address:</strong>${User.address.slice(0, 25)}..</p>

                <span class="contract-space"><strong>stake Amount: &nbsp;</strong>
                ${User.stakeAmount / 10 ** 18}</span>
                <span class="contract-space"><strong>last Reward Calculation Time:&nbsp;</strong>
                ${generateCountDown(User.lastRewardCalculationTime)}</span>
                <span class="contract-space"><strong>last Stake Time:&nbsp;</strong>
                ${generateCountDown(User.lastStakeTime)}</span>
                <span class="contract-space"><strong>Reward Token:&nbsp;</strong>
                ${User.rewardAmount / 10 ** 18}</span>
                <span class="contract-space"><strong>rewards Claimed So Far:&nbsp;</strong>
                ${User.rewardsClaimedSoFar / 10 ** 18}</span>
                <p class="contract-paragraph">
                  Welcome to the token stacking power by @krishan singhal, here you can stack the TBC token and earn rewards
                </p>
              </div>
            </div>

`;

UserProfile.innerHTML = userProfileHTML;
contractTransactionList.innerHTML = userTransactionHistory;