from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Domicile
from base.serializers.brand_serializers import DomicileSerializer
from rest_framework import status

@api_view(['GET']) 
def getDomiciles(request):
    try:
        domiciles= Domicile.objects.all()
        serializer =  DomicileSerializer(domiciles, many=True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getDomicile(request, pk):
    domicile = Domicile.objects.get(brandId=pk)
    serializer = DomicileSerializer(brand, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser]) 
def updateDomicile(request, pk):
    try:
        data=request.data
        domicile=Domicile.objects.get(brandId=pk)
        domicile.domDomicile= data['domicile']
        domicile.domPostal =data['postal']
        domicile.cityId = data['city']
        domicile.save()
        message = {'detail': 'Update domicile'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def createDomicile(request):
    try:
        data = request.data
        domicile = Domicile.objects.create(
            domDomicilio = data['domicilio'],
            domPostal = data['postal'],
            cityId = data['city'],
        )
        domicile.save()
        serializer = DomicileSerializer(domicile, many=False)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)
    
@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteDomicile(request, pk):
    domicile= Domicile.objects.get(brandId=pk)
    Domicile.delete()
    return Response('Delete domicile')