import React from "react"

const CandidatesCard = (props) => {
  return (
    <div class="col-lg-4">
      <div class="text-center card-box">
        <div class="member-card pt-2 pb-2">
          <div class="thumb-lg member-thumb mx-auto">
          </div>
          <div class="">
            <h4>`{props.firstName} {props.lastName}`</h4>
            <p class="text-muted"></p>
            <p class="text-muted">{props.interviewDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidatesCard