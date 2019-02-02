import React from 'react';
import {Window, Toolbar, Content} from 'react-photonkit';

export default class App extends React.Component {
  render() {
    return (
      <Window>
        <Content>
          <table className="table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Kind</th>
                <th>File Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>photon.css</td>
                <td>CSS</td>
                <td>28K</td>
              </tr>
              <tr>
                <td>photon.css</td>
                <td>CSS</td>
                <td>28K</td>
              </tr>
              <tr>
                <td>photon.css</td>
                <td>CSS</td>
                <td>28K</td>
              </tr>
              <tr>
                <td>photon.css</td>
                <td>CSS</td>
                <td>28K</td>
              </tr>
            </tbody>
          </table>
        </Content>
      </Window>
    );
  }
}
