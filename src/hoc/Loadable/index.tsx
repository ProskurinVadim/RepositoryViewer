import { FC } from "react";
import Condition from "../Conditional/Condition";
import If from "../Conditional/If";
import Else from "../Conditional/Else";
import { Spiner } from "../../components/common"

interface ILoadable {
    loading: boolean,
    children: React.ReactNode,
}

const Loadable: FC<ILoadable> = ({ loading, children }) => (
    <Condition condition={loading}>
        <If>
            <div className="text-center mt-5"><Spiner /></div>
        </If>
        <Else>
            {children || null}
        </Else>
    </Condition>
);


export default Loadable;
