from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Address, Address
from base.serializers.branch_serializers import AddressSerializer
from rest_framework import status

@api_view(['GET']) 
def getAddresses(request):
    try:
        addresses= Address.objects.all()
        serializer =  AddressSerializer(addresses, many=True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getAddress(request, pk):
    address = Address.objects.get()
    serializer = AddressSerializer(address, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser]) 
def updateAddress(request, pk):
    try:
        data=request.data
        address=Address.objects.get()
        address.addName= data['name']
        address.usrId= data['usr']
        address.domId= data['dom']
        address.save()
        message = {'detail': 'Update address'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def createAddress(request):
    try:
        data = request.data
        address = Address.objects.create(
            addname = data['name'],
            usrId = data['usr'],
            domId= data['dom'],
        )
        address.save()
        serializer = AddressSerializer(address, many=False)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteAddress(request, pk):
    address= Address.objects.get()
    address.delete()
    return Response('Delete address')