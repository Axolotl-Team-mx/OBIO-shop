from django.shortcuts import render
from django.template import base
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Pais
from base.serializers.order_serializers import PaisSerealizer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

@api_view(['GET'])
def getPaises(request):
    try:
        paises = Pais.objects.all()
        serializer = PaisSerealizer(paises, many=True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def getPais(request , pk):
    pais = Pais.objects.get(contryId=pk)
    serializer = PaisSerealizer(pais, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePais(request, pk):
    try:
        data = request.data
        pais = Pais.objects.get(contryId=pk)
        pais.contryName = data['name']
        pais.save()
        message = {'detail': 'Update contry'}
        return Response(message)
        
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def createPais(request):
    try:
        data =  request.data
        pais = Pais.objects.create(
        contryName = data['name']    
        )
        pais.save()
        serializer = PaisSerealizer(order, many=False)
        return Response(serializer.data)
   
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePais(request, pk):
    order = Pais.objects.get(prodId = pk)
    Pais.delete()
    
    return Response('Delete contry')