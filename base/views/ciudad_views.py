from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Ciudad
from base.serializers.Ciudad_serializers import CiudadSerializer
from rest_framework import status

@api_view(['GET'])
def getCiudades(request):
    try:
        ciudades = Ciudad.objects.all()
        serializer = CiudadSerializer(ciudades, many= True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getCiudad(request, pk):
    ciudad = Ciudad.objects.get(cityId=pk)
    serializer = CiudadSerializer(ciudad, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateCiudad(request, pk):
    try:
        data=request.data
        ciudad =Ciudad.objects.get(cityId=pk)
        ciudad.cityName= data['name']
        ciudad.contryId=data['contry']
        ciudad.save()
        message = {'detail': 'Update contry'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def createCiudad(request):
    try:
        data = request.data
        ciudad= Ciudad.objects.create(
            cityName= data['name']
            contryId= data['contry']
        )
    ciudad.save()
    serializer=CiudadSerializer(ciudad, many=False)
    return Response(serializer.data)
    
    except Exception as e:
    print(e)
    message = {'detail': 'Something bad happen'}
    return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteCiudad(request, pk):
    ciudad= Ciudad.objects.get(cityId=pk)
    ciudad.delete()
    
    return Response('Delete categorie')