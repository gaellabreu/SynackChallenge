import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { more } from '../redux/googleSearch/actions'
import { Button, List, Row, Typography } from 'antd'
import ResultItem from './ResultItem'
import bing from '../Assets/bing.png'
import google from '../Assets/google.png'

export default connect(null, { more })((props) => {
    return <>
        <img src={props.title == 'Google' ? google : bing} alt={'google'} />
        <List
            dataSource={props.data}
            bordered={false}
            renderItem={(item) => <ResultItem item={item} />} />
        {props.showMore && <Button onClick={props.loadMore}>Load more</Button>}
    </>
})

