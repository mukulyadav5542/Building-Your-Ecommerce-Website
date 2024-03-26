import React from "react";
import { Button, Table } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="container p-4 text-center">

        <div className="">
            <h3 className="text-center">TOURS</h3>
        </div>

        <div className="text-center p-3">
          <Table>
            <tbody>
              <tr>
                <td>JUL 16</td>
                <td>DETROIT,MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL 19</td>
                <td>TORONTO,ON</td>
                <td>BUDWEISER STAGE</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL 22</td>
                <td>BRISTOW, VA</td>
                <td>JIGGY LUBE LIVE</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL 29</td>
                <td>PHOENIX, AZ</td>
                <td>AK-CHIN PAVILION</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>AUG 02</td>
                <td>LAS VEGAS, NV</td>
                <td>T-MOBILE ARENA</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>AUG 07</td>
                <td>CONCORD, CA</td>
                <td>CONCORD PAVILION</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Home;
