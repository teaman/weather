import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data, units) {
	if(units==='inHg'){
		return _.round(_.sum(data)/data.length, 2).toFixed(2);
	} else {
		return _.round(_.sum(data)/data.length);
	}
}

export default (props) => {

	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data, props.units)} {props.units}
			</div>
		</div>
	);
}
