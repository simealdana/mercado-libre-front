import useForm from '../../shared/hooks/useForm';
import { supressWarning, mountHook } from '../utils';

describe('useUsers', () => {
    supressWarning();

    it('Add field', () => {
        const hook = mountHook(useForm);
        expect(hook.data.fields).toEqual(undefined);
        hook.data.addField("items","iphone");
        expect(hook.data.fields).toEqual({items:"iphone"});
    });

    it('Delete field', () => {
        const hook = mountHook(useForm);
        expect(hook.data.fields).toEqual(undefined);
        hook.data.addField("items","iphone");
        expect(hook.data.fields).toEqual({items:"iphone"});
        hook.data.removeField("items");
        expect(hook.data.fields).toEqual({});

    });

    it('Input test ', () => {
        const hook = mountHook(useForm);
        hook.data.addField("item","iphone");
        expect(hook.data.fields).toEqual({item:"iphone"});
        const e ={
            target:{
                value:"macBook",
                name:"item",
                type:"text"
            }
        }
        hook.data.getInput("item").onChange(e);
        expect(hook.data.fields).toEqual({item:"macBook"});
    });
    
});