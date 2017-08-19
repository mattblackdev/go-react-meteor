import React from 'react'
import styled from 'styled-components'
import * as go from 'gojs'
import { observer } from 'mobx-react'



@observer class App extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log('component did mount')
		console.log(this.props.store)
		this.diagram = new go.Diagram("myDiagramDiv")
    this.diagram.model = new go.GraphLinksModel(
      this.props.store.nodes.slice(),
      this.props.store.links.slice()  // one link data, in an Array
    );
	}

	componentWillReact() {
		console.log('i will re-render')
		this.diagram.model.applyIncrementalJson({
			class: "go.GraphLinksModel",
			incremental: 1,
			nodeKeyProperty: "key", // or whatever you are using
			linkKeyProperty: "key", // or whatever you are using
			modifiedNodeData: this.props.store.nodes.slice(),
			modifiedLinkData: this.props.store.links.slice()  // I assume you have an Array of link data too
		});
	}

	render() {
		return (
			<div>
				<div id="myDiagramDiv" style={{
					border: 'solid 1px blue',
					width: '400px',
					height: '150px'
				}}>
				</div>
				<button onClick={() => this.props.store.add()}>Add Node</button>
				{this.props.store.nodes.map(node => undefined)}
			</div>
		)
	}
}

export default App