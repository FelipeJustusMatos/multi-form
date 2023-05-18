import { FormItem } from "./FormItem";

export const MultiStepFrom = (props) => {
  return (
    <div className="text-left">
      {props.list[props.step - 1].items?.map((item, index) => {
        return <FormItem key={item.label} item={item} />;
      })}
    </div>
  );
};
