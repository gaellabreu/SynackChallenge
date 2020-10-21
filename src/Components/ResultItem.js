import React from 'react'
import { Button, List } from 'antd'

export default (props) => <List.Item>
    <List.Item.Meta
        title={<a href={props.item.url} type={'link'}>{props.item.title || props.item.name}</a>}
        description={props.item.snippet}
    />
</List.Item>