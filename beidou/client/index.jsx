import React from 'react';

export default class View extends React.Component {
  static doctype = '<!DOCTYPE html>'

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>今天天气不错</h1>
=======
        <h1>tian xian di yi</h1>
>>>>>>> ed8f29407162e7d0607be2e8093a4d592545f1a5
        <ul>
          <li>
            <a href="/static">Static Page</a>
          </li>
          <li>
            <a href="/style">Static Styling Page </a>
          </li>
          <li>
            <a href="/script">Page with Script</a>
          </li>
        </ul>
      </div>
    );
  }
}
