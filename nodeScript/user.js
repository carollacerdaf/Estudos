import axios from 'axios'
import UserData from './UserData.ts'

const userData = new UserData()

const basic = userData.setBasicInfo('39168439075', '6tyg7', 'teste776666@airfox.com')
const additional = userData