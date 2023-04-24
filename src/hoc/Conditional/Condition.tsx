import React,{FC,useCallback} from 'react';

import { ICondition } from "../../types";

import If from "./If";
import ElseIf from "./ElseIf";
import Else from "./Else";

// added types for hoc that I foget to add before

const Condition: FC<ICondition> = ({ children, condition }) => {

    const findChild = useCallback((MatchComponent: FC<ICondition>) => (
        React
            .Children
            .toArray(children)
            .find((child: React.ReactNode) => {
                if (React.isValidElement(child)) {
                    return child.type === MatchComponent && (MatchComponent !== ElseIf || child.props.condition)
                }
            })
    ), [children]);

    return <>
        {condition ? findChild(If) : (findChild(ElseIf) || findChild(Else))}
    </>;
};

export {If, ElseIf, Else}

export default Condition;
