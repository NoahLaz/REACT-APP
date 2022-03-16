import React from "react";
import ShowContact from "./ShowContact";

const contactsArray = [
  {
    fullname: "Nouh",
    tel: "06443456",
  },
  {
    fullname: "salama",
    tel: "06443456",
  },
  {
    fullname: "lazreq",
    tel: "06443456",
  },
  {
    fullname: "Yasine",
    tel: "06443456",
  },
];

function ShowContacts() {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>fullname</th>
                  <th>Tel</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contactsArray.map((contact, index) => {
                  console.log(contact);
                  <ShowContact key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowContacts;
