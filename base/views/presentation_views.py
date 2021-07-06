from django.shortcuts import render
from django.template import base
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Presentation
from base.serializers.presentation_serializers import BranchSerializer, PresentationSerializer

from rest_framework import status


@api_view(['GET'])
def getPresentations(request):
    try:
        Presentations = Presentation.objects.all()
        serializer = PresentationSerializer(Presentations, many=True)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getPresentation(request, pk):
    presentation = Presentation.objects.get(presId=pk)
    serializer = PresentationSerializer(presentation, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePresentation(request, pk):
    data = request.data
    presentation = Presentation.objects.get(presId=pk)
    presentation.presName = data['presId']
    presentation.presContNet = data['presContNet']
    presentation.presUnit = data['presUnit']
    presentation.save()
    serializer = PresentationSerializer(presentation, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePresentation(request, pk):
    presentation = Presentation.objects.get(presId=pk)
    presentation.delete()
    return Response("Presentación eliminada.")


@api_view(['POST'])
def createPresentation(request):
    try:
        data = request.data
        presentation = Presentation.objects.create(
            presName= data['Sample name'],
            presContNet= data['contNet'],
            presName= data['MB'],
        )
        presentation.save()
        serializer = PresentationSerializer(presentation, many=False)
        return Response(serializer.data)

    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_401_BAD_REQUEST)
