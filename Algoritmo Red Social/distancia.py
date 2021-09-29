import requests

BASE_URL = 'http://localhost:3001/api/'
s = requests.Session()

def run():
    userA = 'userA'
    userB = 'userB'
    userC = 'userC'
    
    responseA = s.request('GET', BASE_URL + userA + '/following')
    responseB = s.request('GET', BASE_URL + userB + '/following')
    responseC = s.request('GET', BASE_URL + userC + '/following')

    jsonA = responseA.json()
    jsonB = responseB.json()
    jsonC = responseC.json()
    listUserA = []
    for item in jsonA['data']:
        print(item)
        for followingA in item['following']:
            listUserA.append(followingA)
    
    listUserB = []
    for item in jsonB['data']:
        print(item)
        for followingB in item['following']:
            listUserB.append(followingB)
    
    listUserC = []
    for item in jsonC['data']:
        print(item)
        for followingC in item['following']:
            listUserC.append(followingC)

    social_user_distance(listUserA,listUserB,listUserC)
    

def social_user_distance(listUserA, listUserB, listUserC):
    user_from = input('Ingrese el nombre de usuario de origen: ')
    user_to = input('Ingrese el nombre de usuario de destino: ')
    contUserA = 0
    contUserB = 0
    contUserC = 0
    if user_from == 'userA':
        print(user_from)
        if user_to in listUserA:
            contUserA = (listUserA.index(user_to)+1)
        else:
            if user_to in listUserB:
                    contUserB = (listUserB.index(user_to)+2)
            else:
                if user_to in listUserC:
                    contUserC = (listUserC.index(user_to)+3)
                else:
                    contUserA = 0
    elif user_from == 'userB':
        print(user_from)
        if user_to in listUserB:
                contUserB = (listUserB.index(user_to)+1)
        else:
            if user_to in listUserC:
                contUserC = (listUserC.index(user_to)+2)
            else:
                contUserB = 0
    elif user_from == 'userC':
        print(user_from)
        if user_to in listUserC:
            contUserC = (listUserC.index(user_to)+1)
        else:
            contUserC = 0
    else:
        print("User no encontrado")

    print('La distancia entre '+user_from + ' y ' + user_to + ', es: ')
    print(contUserA+contUserB+contUserC)

if __name__ == '__main__':
    run()