import React from 'react'
import CreateReact from 'create-react-class'
import {Grid, Row, Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

var Setting = CreateReact({
    render: function() {
        return (
            <Grid>
                <Row>
                    <Col md={4} xs={4}>
                    <ListGroup>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>...</ListGroupItem>
                    </ListGroup>;                   
                    </Col> 
                    <Col md={8} xs={8}>
                        <Button>hoge</Button>
                    </Col>                     
                </Row>
            </Grid>
        );
      }
})

export default Setting;