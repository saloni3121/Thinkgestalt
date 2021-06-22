import React from "react";
import "../stylings/case_studies.css";
import MailChimp from "../images/Case_studies/Mail Chimp.png";
import Uber from "../images/Case_studies/Uber.png";
import Oglivy from "../images/Case_studies/Ogilvy.png";
import TypeForm from "../images/Case_studies/Typeform.png";
import Element1 from "../images/Case_studies/Elements/Element 1.png";
import Element2 from "../images/Case_studies/Elements/Element 2.png";

function CaseStudies() {
  return (
    <React.Fragment>
      <div className="case-studies-container">
        <p className="case-studies-p">Case studies of big brands </p>
        <div className="case-studies-heading">Case Studies</div>
        <div className="col-md-7 case-studies-desc">
          In the case studies listed below, observe that some are more bold and
          daring than others, willing to stand out, yet everyone is considered
          to be a success.
        </div>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-10">
                <div className="company-name-1">Mail Chimp</div>
                <div className="company-desc-1">
                  The most unexpected rebrand in 2018 and probably "top 10
                  all-time weirdest rebrands in history of branding"
                </div>
              </div>
              <div className="col-md-2">
                <img src={Element1} className="img-fluid d-none d-sm-block" style={{height:'300px'}}/>
              </div>
            </div>
            <img src={MailChimp} className="img-fluid" />
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2">
                <img src={Element1} className="img-fluid d-none d-sm-block" style={{height:'300px'}}/>
              </div>
              <div className="col-md-10">
                <div className="company-name-2">Uber</div>
                <div className="company-desc-2">
                  We've been waiting for this, a much needed and somewhat
                  expected rebrand from Uber finally happened in 2018
                </div>
              </div>
            </div>
            <img src={Uber} className="img-fluid" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-6">
            <img src={Oglivy} className="img-fluid" />
            <div className="row">
              <div className="col-md-10">
                <div className="company-name-3">Ogilvy</div>
                <div className="company-desc-3">
                  A legend gets rebranded. Collins focus on the heritage,
                  turning the new Ogilvy logo into a cult classic mark yet
                  simple mark.
                </div>
              </div>
              <div className="col-md-2">
                <img src={Element2} className="img-fluid d-none d-sm-block" style={{height:'300px'}}/>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img src={TypeForm} className="img-fluid" />
            <div className="row">
              <div className="col-md-2">
              <img src={Element2} className="img-fluid d-none d-sm-block" style={{height:'300px'}}/> 
              </div>
              <div className="col-md-10">
                <div className="company-name-4">TypeForm</div>
                <div className="company-desc-4">
                  Making forms fun, that's precisely what the new Typeform logo
                  communicates and encourages us too.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CaseStudies;
