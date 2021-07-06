from django.shortcuts import render
from django.template import base
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Presentation
from base.serializers.branch_serializers import BranchSerializer

from rest_framework import status


@api_view(['GET'])
def getPresentations(request, page):
    try:
        Presentations = Presentation.objects.all()
        serializer = BranchSerializer(Presentations, many=True)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getPresentation(request, pk):
    presentation = Presentation.objects.get(presId=pk)
    serializer = BranchSerializer(presentation, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateBranch(request, pk):
    data = request.data
    presentation = Presentation.objects.get(presId=pk)

    presentation.presName = data['presId']

    presentation.presContNet = data['presContNet']

    presentation.presUnit = data['presUnit']

    presentation.save()

    serializer = BranchSerializer(presentation, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
@permission_classes([IsAdminUser])
def deletePresentation(request, pk):
    presentation = Presentation.objects.get(presId=pk)
    presentation.delete()

    return Response("Presentación eliminada.")


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@permission_classes([IsAdminUser])
def createBranch(request):
    try:
        presentation = Presentation.objects.create(
            presName='Sample name', # Puede ser nulo
            presContNet=0,
            presName='MB'
        )
        print(presentation)
        serializer = BranchSerializer(presentation, many=False)
        return Response(serializer.data)

    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_401_BAD_REQUEST)
