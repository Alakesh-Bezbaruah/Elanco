import React, { useEffect, useState } from "react";
import { User } from "../../models/User";
import { UserService } from "../../services/UserService";
import "./Einfo.css"

interface Istate {
  loading: boolean;
  user: User[];
  errorMsg: String;
}

const Einfo: React.FC = () => {
  const [state, setState] = useState<Istate>({
    loading: false,
    user: [] as User[],
    errorMsg: "",
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    UserService.getAllData()
      .then((res) =>
        setState({
          ...state,
          loading: false,
          user: res.data,
        })
      )
      .catch(err => setState({
        ...state , loading:false , errorMsg:err.message
      }));
  }, []);

  const {loading, user , errorMsg} = state 
  return (
    <>
      <div>
        <h1>Elanco’s Cloud Environment</h1>
        <div className="search">
          <div>
            <input placeholder="Search Date" className="input"/>
          </div>
          <div>
          <input placeholder="Search ServiceName" className="input"/>
          </div>
          <div>
          <input placeholder="Search Location" className="input"/>
          </div>
        </div>
        {errorMsg && (<p>{errorMsg}</p>)}
        {loading && <h1 className="loading">Loading......</h1>}
        <table >
          <thead>
            <tr>
              <td>InstanceId</td>
              <td>Date</td>
              <td>Location</td>
              <td>ConsumedQuantity</td>
              <td>Cost</td>
              <td>MeterCategory</td>
              <td>ResourceGroup</td>
              <td>ResourceLocation</td>
              <td>ServiceName</td>
              <td>UnitOfMeasure</td>
            </tr>
          </thead>
          <tbody>
            {
            user.length>0 && user.map(user =>(
              <tr key={user.InstanceId}>
                <td>{user.InstanceId}</td>
                <td>{user.Date}</td>
                <td>{user.Location}</td>
                <td>{user.ConsumedQuantity}</td>
                <td>{user.Cost}</td>
                <td>{user.MeterCategory}</td>
                <td>{user.ResourceGroup}</td>
                <td>{user.ResourceLocation}</td>
                <td>{user.ServiceName}</td>
                <td>{user.UnitOfMeasure}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Einfo;
