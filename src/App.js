import './App.css';
import {Component, useState} from "react";
import JSONEditorReact from './JSONEditorReact';
import './App.css';

const schema = {
    title: 'data',
    type: 'object',
    description: 'typing columns and cells in a table',
    properties: {
        name: {
            description: 'the unique name of the parameter in the column',
            type: 'string'
        },
        type: {
            description: 'type of parameter',
            type: 'string'
        },
        component: {
            description: 'component',
            type: 'string'
        },
        list: {
            description: 'drop-down list if available',
            type: 'array',
            items: {
                type: 'string'
            }
        },
        readOnly: {
            description: 'read-only parameter',
            type: 'boolean'
        }
    },
    required: ['name', 'type', 'component', 'readOnly']
};

const actions = [
    'export', 'exportAll', 'copy', 'priority', 'status',
    'duplicate', 'remove', 'removeAll', 'logs', 'logsAll',
    'create', 'createJson'];

const nav = ['tree', 'code'];

const service = 'service';

const entity = 'entity';

const parrentId = 1;


const json =
    {
        'name': 'jacques',
        'type': 'string',
        'component': 'component1',
        'readOnly': false,
    };

class App extends Component {
    state = {
        schema,
        text: JSON.stringify(json, null, 2),
        mode: 'tree',
        editable:json.readOnly,
    };

    render() {
        return (
            <div className="app">
                <div className={"title"}>
                    <h1>JSONEditor React advanced demo</h1>
                </div>
                <div className="contents">
                    <div className="mode">
                        mode: <select value={this.state.mode} onChange={this.onModeChangeSelect}>
                        {
                            nav.map(mode => <option key={mode} value={mode}>{mode}</option>)
                        }
                    </select>
                    </div>
                    <JSONEditorReact
                        schema={this.state.schema}
                        text={this.state.text}
                        mode={this.state.mode}
                        modes={nav}
                        editable={this.state.editable}
                        indentation={4}
                        onChangeText={this.onChangeText}
                        onModeChange={this.onModeChange}
                    />
                    <div className="code">
            <pre>
              <code>
                {this.state.text}
              </code>
            </pre>
                    </div>
                </div>
            </div>
        );
    }

    onChangeText = (text) => {
        this.setState({text});
    };

    onModeChangeSelect = (event) => {
        this.setState({mode: event.target.value});
    };

    onModeChange = (mode) => {
        this.setState({mode});
    };
}

export default App;
