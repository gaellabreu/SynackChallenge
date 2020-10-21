import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Select, Button, Input } from 'antd'
import { search as searchWithGoogle } from '../redux/googleSearch/actions'
import { search as searchWithBing } from '../redux/bingSearch/actions'
import { changeEngine } from '../redux/engine/actions'

const mapStateToProps = (state) => {
    return {
        engine: state.engine
    }
}
export default connect(mapStateToProps, { searchWithBing, searchWithGoogle, changeEngine })((props) => {

    const [term, setTerm] = useState('')

    const searchEngines = ['google', 'bing', 'both']

    const onTermChange = (e) => setTerm(e.target.value)
    const onEngineChange = (e) => props.changeEngine(e)
    const onSearch = () => {
        if (['google', 'both'].includes(props.engine))
            props.searchWithGoogle(term)
        if (['bing', 'both'].includes(props.engine))
            props.searchWithBing(term)
    }

    const prefixSelect = <Select
        value={props.engine}
        className={'Select'}
        onSelect={onEngineChange}>
        {searchEngines.map(s => <Select.Option key={s} value={s}>{s}</Select.Option>)}
    </Select>

    const suffixButton = <Button onClick={onSearch} type={'primary'} >Submit</Button>

    return <Input
        value={term}
        onChange={onTermChange}
        size={'large'}
        addonBefore={prefixSelect}
        addonAfter={suffixButton} />
})