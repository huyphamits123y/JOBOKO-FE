import { createSlice } from '@reduxjs/toolkit'



const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('detailsuser', serializedState);
    } catch (e) {
        console.error(e);
    }
};

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('detailsuser');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const initialState = loadStateFromLocalStorage() || {
    name: '',
    email: '',
    access_token: '',
    phone: '',
    address: '',
    id: '',
    isAdmin: false,
    industry: '',
    title: '',
    location: '',
    salaryfrom: 0,
    salaryto: 0,
    desire: '',
    dateofbirth: '',
    gender: '',
    materialstatus: '',
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name = '', email = '', access_token = '', address = '', phone = '', _id = '', isAdmin, industry = '', title = '', location = '', salaryfrom = 0, salaryto = 0, desire = '', dateofbirth = '', gender = '', materialstatus = '' } = action.payload
            console.log('action', action)
            state.name = name;
            state.email = email;
            state.access_token = access_token;
            state.address = address;
            state.id = _id;
            state.phone = phone;
            state.isAdmin = isAdmin;
            state.industry = industry;
            state.title = title;
            state.location = location;
            state.salaryto = salaryto;
            state.salaryfrom = salaryfrom;
            state.desire = desire;
            state.dateofbirth = dateofbirth;
            state.gender = gender;
            state.materialstatus = materialstatus;


            saveStateToLocalStorage(state);


        },
        resetUser: (state) => {
            state.name = '';
            state.email = '';
            state.access_token = '';
            state.address = '';
            state.phone = '';
            state.id = '';
            state.isAdmin = false;
            state.industry = '';
            state.title = '';
            state.location = '';
            state.salaryto = 0;
            state.salaryfrom = 0;
            state.desire = '';
            state.dateofbirth = '';
            state.gender = '';
            state.materialstatus = '';


            saveStateToLocalStorage(state);
        }

    },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer