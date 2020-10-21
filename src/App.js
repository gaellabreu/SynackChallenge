import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ResultList from './Components/ResultList';
import SearchBar from './Components/SearchBar';
import { more } from './redux/googleSearch/actions'

const mapStateToProps = (state) => {
  return {
    engine: state.engine,
    google: state.google,
    bing: state.bing
  }
}

export default connect(mapStateToProps, { more })((props) => {

  const loadMore = () => {
    if (!props.google.queries.nextPage.length) return
    const { searchTerms, startIndex } = props.google.queries.nextPage[0]
    props.more(searchTerms, startIndex)
  }

  return <div className="App" style={{ backgroundColor: '#282c34' }}>
    <SearchBar />
    <Row>
      {(props.engine == 'google' || props.engine == 'both') && <Col span={12}>
        <ResultList
          data={props.google.items}
          showMore={props.google.queries.nextPage}
          loadMore={loadMore}
          title={'Google'} />
      </Col>}
      {(props.engine == 'bing' || props.engine == 'both') && <Col span={12}>
        <ResultList
          data={props.bing.items}
          title={'Bing'} />
      </Col>}
    </Row>
  </div>
})