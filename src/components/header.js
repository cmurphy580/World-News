import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Public from 'material-ui/svg-icons/social/public';
import SearchBar from './search_bar';
import { blue900 } from 'material-ui/styles/colors';

export default class Header extends Component {
  reload = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  }
  render() {
    const styles = {
      headerStyle: {
        backgroundColor: blue900,
        position: 'fixed',
        zIndex: '4'
      },
      arrow: {
        cursor: 'pointer',
        fontSize: '35px !important',
      },
    };
    return (
      <section>
        <MuiThemeProvider>
          <AppBar
            title="World News"
            className="news_header"
            style={styles.headerStyle}
            iconElementLeft={<Public onClick={ this.reload.bind(null, this) } className="public" style={styles.public}/> }
            iconElementRight={<IconButton><KeyboardArrowDown onClick={ () => this.props.changeBoolean(this.props.boolean) } className="arrow" style={styles.arrow}/></IconButton>}
            >
            {/*<p>News from newsapi.org</p>*/}
          </AppBar>
        </MuiThemeProvider>
        <SearchBar {...this.props} />
      </section>
    );
  }
}
