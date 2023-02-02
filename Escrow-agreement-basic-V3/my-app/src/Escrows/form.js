import { Box, Checkbox, FormControlLabel, Grid, TextField, Typography, Button, Select, MenuItem, InputLabel, FormControl, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";

// import {TextField, Button, Box} from "@material-ui/core";

function Dispay(props) {
console.log(props?.name);

 
    return (
        <>

            <div className="createAgreement section--mid">
                <div className="section-container section--small agrmnt-form--container">
                    <div className="agreements-card">
                        <table className="agreement-table">
                            <thead>
                                <tr className="agreement-table-row agreement-table-row--header">
                                    <th className="agreement-table-cell agreement-table-cell--header">ID</th>

                                    <th className="agreement-table-cell agreement-table-cell--header">
                                        <div className="agreement-table-cell--header-wrapper">
                                            <span>Agreement Title</span>
                                        </div>
                                    </th>

                                    <th className="agreement-table-cell agreement-table-cell--header">
                                        <div className="agreement-table-cell--header-wrapper">
                                            <span>Seller</span>
                                        </div>
                                    </th>

                                    <th className="agreement-table-cell agreement-table-cell--header">
                                        <div className="agreement-table-cell--header-wrapper">
                                            <span>Amount</span>
                                        </div>
                                    </th>

                                    <th className="agreement-table-cell agreement-table-cell--header">
                                        <div className="agreement-table-cell--header-wrapper">
                                            <span>Role</span>
                                        </div>
                                    </th>

                                    <th className="agreement-table-cell agreement-table-cell--header">
                                        <div style={{ marginLeft: '30px' }} className="agreement-table-cell--header-wrapper">
                                            <span>Status</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr style={{ borderBottom: '1px solid #ddd' }} className="agreement-tablerow">
                                    <td className="agreement-table-cell">
                                        1232
                                    </td>
                                    <td className="agreement-table-cell">
                                        test 1
                                    </td>
                                    <td className="agreement-table-cell">
                                        Seller address
                                    </td>
                                    <td className="agreement-table-cell">
                                        1 Eth
                                    </td>
                                    <td className="agreement-table-cell">
                                        Buyer
                                    </td>
                                    <td className="transactions-table-cell transactions-table-cell--large transactions-table-cell--last transactions-table-cell@mobile--fullWidth">
                                        <div className="transactions-tags-container">
                                            <span className="transactions-tags-item transactions-tags-item--awaiting">• Awaiting Agreement</span>
                                        </div>

                                    </td>
                                </tr>





                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dispay;